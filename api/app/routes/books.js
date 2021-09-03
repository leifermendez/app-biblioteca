const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const {
  validateCreateBook,
  validateGetBook,
  validateUpdateBook
} = require('../validators')
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require('../controlles/books')

router.get('/',
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  getItems
)

router.get('/:id',
  validateGetBook,
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  getItem
)

router.post('/',
  validateCreateBook,
  checkAuth,
  checkRoleAuth(['admin']),
  createItem
)

router.patch('/:id',
  validateUpdateBook,
  checkAuth,
  checkRoleAuth(['admin']),
  updateItem
)

router.delete('/:id',
  validateGetBook,
  checkAuth,
  checkRoleAuth(['admin']),
  deleteItem
)

module.exports = router