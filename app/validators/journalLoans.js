const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')



/**
 * Validates get item request
 */
const validateCreateJournalLoans = [
  check('journal')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

/**
 * Validates get item request
 */
const validateUpdateJournalLoans = [
  check('journal')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = {
  validateCreateJournalLoans,
  validateUpdateJournalLoans
}