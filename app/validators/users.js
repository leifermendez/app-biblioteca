const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ //TODO:name, age, email
    check('ID')
        .exists()
        .not()
        .isEmpty(),
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('lastName')
        .exists()
        .not()
        .isEmpty(),
    check('user')
        .exists()
        .not()
        .isEmpty(),
    check('email')
        .exists()
        .isEmail(),
    check('password')
        .exists()
        .not()
        .isEmpty(),
    check('role')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateUpdate = [ //TODO:name, age, email
    check('ID')
        .optional()
        .not()
        .isEmpty(),
    check('name')
        .exists()
        .not()
        .isEmpty(),
    check('lastName')
        .exists()
        .not()
        .isEmpty(),
    check('user')
        .exists()
        .not()
        .isEmpty(),
    check('email')
        .exists()
        .isEmail(),
    check('password')
        .exists()
        .not()
        .isEmpty(),
    check('role')
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
const validateGetItem = [
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

module.exports = { validateCreate, validateGetItem, validateUpdate }