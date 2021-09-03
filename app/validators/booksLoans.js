const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')



/**
 * Validates get item request
 */
const validateCreateBooksLoans = [
  check('book')
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
const validateUpdateBooksLoans = [
  check('book')
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
/**
 * Validates get item request
 */
const validateGetBooksLoans = [
  check('book')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('loan')
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
  validateCreateBooksLoans,
  validateGetBooksLoans,
  validateUpdateBooksLoans
}