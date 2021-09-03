const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')

const { loginCtrl, registerCtrl, getRefreshToken } = require('../controlles/auth')
const { validateRegister, validateLogin } = require('../validators')

//TODO: Login !
router.post('/login', validateLogin, loginCtrl)


//TODO: Registrar un usuario
router.post('/register', validateRegister, registerCtrl)

router.get('/token',
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  getRefreshToken
)


module.exports = router