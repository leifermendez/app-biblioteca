const { httpError } = require('../helpers/handleError')
const { matchedData } = require('express-validator')
const userModel = require('../models/users')
const { encrypt } = require('../helpers/handleBcrypt')
const { setUserInfo } = require('../helpers')

const getItems = async (req, res) => {
    try {

        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const item = await userModel.findById({ _id: req.id })
        const data = await setUserInfo(item)
        res.send({ data })
    } catch (e) {
        httpError(res, e)
    }
}

const createItem = async (req, res) => {
    try {

        req = matchedData(req)
        const userExists = await userModel.findOne({ user: req.user })

        if (userExists) {
            res.status(422)
            return res.send({ error: `EL usuario ${req.user} ya esta en uso` })
        }
        const userIdExists = await userModel.findOne({ ID: req.ID })

        if (userIdExists) {
            res.status(422)
            return res.send({ error: `Ya existe un  usuario con el id ${req.ID}` })
        }
        const passwordHash = await encrypt(req.password)
        req.password = passwordHash
        const resDetail = await userModel.create(req)
        const data = await setUserInfo(resDetail)
        res.send({ data })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = async (req, res) => {

    try {
        req = matchedData(req)
        const userDB = await userModel.findOne({ _id: req.id })
        if (userDB.user !== req.user) {
            const userExists = await userModel.findOne({ user: req.user })
            if (userExists) {
                res.status(422)
                return res.send({ error: `EL usuario ${req.user} ya esta en uso` })
            }
        }

        if (userDB.ID !== req.ID) {
            const userIdExists = await userModel.findOne({ ID: req.ID })
            if (userIdExists) {
                res.status(422)
                return res.send({ error: `Ya existe un  usuario con el id ${req.ID}` })
            }
        }

        const passwordHash = await encrypt(req.password)
        req.password = passwordHash

        const resDetail = await userModel.findByIdAndUpdate(req.id, req, {
            new: true,
            runValidators: true
        })
        const data = await setUserInfo(resDetail)
        res.send({ data })
    } catch (e) {
        httpError(res, e)
    }

}

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        await userModel.findByIdAndRemove(req.id)
        res.send({ msg: 'DELETED' })
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }