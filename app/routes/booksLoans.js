const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { validateCreateBooksLoans, validateUpdateBooksLoans } = require('../validators')
const { createItem, updateItem, getItems, getItemsUser } = require('../controlles/booksLoans')


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
  validateCreateBooksLoans,
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  createItem
)

router.patch('/:id',
  validateUpdateBooksLoans,
  checkAuth,
  checkRoleAuth(['admin', 'student', 'librarian']),
  updateItem
)



module.exports = router