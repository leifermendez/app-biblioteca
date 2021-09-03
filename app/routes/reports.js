const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems } = require('../controlles/reports')

router.get('/',
  checkAuth,
  checkRoleAuth(['admin']),
  getItems

)



module.exports = router