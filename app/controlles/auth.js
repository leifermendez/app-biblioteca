const { matchedData } = require('express-validator')
const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign, verifyToken } = require('../helpers/generateToken')
const userModel = require('../models/users')
const { setUserInfo } = require('../helpers')

//TODO: Login!
const loginCtrl = async (req, res) => {
    try {

        req = matchedData(req)
        const userDB = await userModel.findOne({ user: req.user })

        if (!userDB) {
            res.status(404)
            return res.send({ error: 'Usuario no existe' })
        }

        const checkPassword = await compare(req.password, userDB.password) //TODO: Contraseña!

        //TODO JWT 👉
        const tokenSession = await tokenSign(userDB) //TODO: 2d2d2d2d2d2d2

        if (checkPassword) { //TODO Contraseña es correcta!
            const data = {
                user: await setUserInfo(userDB),
                token: tokenSession
            }
            return res.send({ data })
        }

        if (!checkPassword) {
            res.status(409)
            return res.send({
                error: 'Invalid password'
            })

        }

    } catch (e) {
        httpError(res, e)
    }
}

//TODO: Registramos usuario!
const registerCtrl = async (req, res) => {
    try {

        req = matchedData(req)
        const userExists = await userModel.findOne({ user: req.user })

        if (userExists) {
            res.status(422)
            return res.send({ error: `EL usuario ${req.user} ya esta en uso` })
        }
        const passwordHash = await encrypt(req.password)
        req.password = passwordHash
        const registerUser = await userModel.create(req)
        const data = await setUserInfo(registerUser)

        return res.send({ data })

    } catch (e) {
        return httpError(res, e)
    }
}

const returnToken = async (user = {}) => {
    try {
        const userInfor = await setUserInfo(user)
        const token = await tokenSign(user)
        const data = {
            user: userInfor,
            token
        }
        return data;
    } catch (e) {
        return e
    }
}

const getRefreshToken = async (req, res) => {
    try {
        const tokenEncrypted = req.headers.authorization
            .replace('Bearer ', '')
            .trim()
        const tokenData = await verifyToken(tokenEncrypted)
        const user = await userModel.findById({ _id: tokenData._id })
        const data = await returnToken(user)
        return res.send({ data })
    } catch (e) {
        return httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl, getRefreshToken }