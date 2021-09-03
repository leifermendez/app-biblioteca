const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require('../controlles/journals')
const {
  validateCreateJournal,
  validateGetJournal,
  validateUpdateJournal
} = require('../validators')


router.get('/',
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  getItems
)

router.get('/:id',
  validateGetJournal,
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  getItem
)
router.post('/',
  validateCreateJournal,
  checkAuth,
  checkRoleAuth(['admin']),
  createItem
)
router.patch('/:id',
  validateUpdateJournal,
  checkAuth,
  checkRoleAuth(['admin']),
  updateItem
)

router.delete('/:id',
  validateGetJournal,
  checkAuth,
  checkRoleAuth(['admin']),
  deleteItem
)

module.exports = router