const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')

const validateRegister = [
  check('name')
    .exists()
    .not()
    .isEmpty(),
  check('user')
    .exists()
    .not()
    .isEmpty(),
  check('password')
    .exists()
    .not()
    .isEmpty(),
  check('role')
    .optional(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
const validateLogin = [
  check('user')
    .exists()
    .not()
    .isEmpty(),
  check('password')
    .exists()
    .not()
    .isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateRegister, validateLogin }