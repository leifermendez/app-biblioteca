const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { validateCreateJournalLoans, validateUpdateJournalLoans } = require('../validators')
const { createItem, getItems, getItemsUser, updateItem } = require('../controlles/journalsLoans')


router.get('/all',
  checkAuth,
  checkRoleAuth(['admin']),
  getItems
)
router.get('/',
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  getItemsUser
)
router.post('/',
  validateCreateJournalLoans,
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  createItem
)

router.patch('/:id',
  validateUpdateJournalLoans,
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  updateItem
)

module.exports = router