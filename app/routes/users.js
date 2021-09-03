const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem
} = require('../controlles/users')
const {
  validateCreate,
  validateGetItem,
  validateUpdate
} = require('../validators')

router.get('/',
  checkAuth,
  checkRoleAuth(['admin']),
  getItems
)


router.get('/:id',
  validateGetItem,
  checkAuth,
  checkRoleAuth(['admin']),
  getItem
)

router.post('/',
  validateCreate,
  checkAuth,
  checkRoleAuth(['admin']),
  createItem
)

router.patch('/:id',
  validateUpdate,
  checkAuth,
  checkRoleAuth(['admin']),
  updateItem
)

router.delete('/:id',
  validateGetItem,
  checkAuth,
  checkRoleAuth(['admin']),
  deleteItem
)


module.exports = router