const { validateRegister, validateLogin, } = require("./auth");
const { validateCreateBook, validateGetBook, validateUpdateBook } = require("./books");
const { validateCreateJournal, validateGetJournal, validateUpdateJournal } = require("./journals");
const { validateCreate, validateGetItem, validateUpdate } = require("./users");
module.exports = {
  validateRegister,
  validateLogin,
  validateGetItem,
  validateCreate,
  validateUpdate,
  validateCreateBook,
  validateGetBook,
  validateUpdateBook,
  validateCreateJournal,
  validateGetJournal,
  validateUpdateJournal
}