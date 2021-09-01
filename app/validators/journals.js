const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')


const validateCreateJournal = [
  check('author')
    .exists()
    .not()
    .isEmpty(),
  check('title')
    .exists()
    .not()
    .isEmpty(),
  check('edition')
    .exists()
    .not()
    .isEmpty(),
  check('description')
    .exists()
    .not()
    .isEmpty(),
  check('currentFrequency')
    .exists()
    .not()
    .isEmpty(),
  check('specimens')
    .exists()
    .not()
    .isEmpty(),
  check('theme')
    .exists()
    .not()
    .isEmpty(),
  check('keyword')
    .exists()
    .not()
    .isEmpty(),
  check('copy')
    .exists()
    .not()
    .isEmpty(),
  check('available')
    .exists()
    .not()
    .isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
const validateUpdateJournal = [
  check('author')
    .exists()
    .not()
    .isEmpty(),
  check('title')
    .exists()
    .not()
    .isEmpty(),
  check('edition')
    .exists()
    .not()
    .isEmpty(),
  check('description')
    .exists()
    .not()
    .isEmpty(),
  check('currentFrequency')
    .exists()
    .not()
    .isEmpty(),
  check('specimens')
    .exists()
    .not()
    .isEmpty(),
  check('theme')
    .exists()
    .not()
    .isEmpty(),
  check('keyword')
    .exists()
    .not()
    .isEmpty(),
  check('copy')
    .exists()
    .not()
    .isEmpty(),
  check('available')
    .exists()
    .not()
    .isEmpty(),
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
const validateGetJournal = [
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
  validateCreateJournal,
  validateGetJournal,
  validateUpdateJournal
}