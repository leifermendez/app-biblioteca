const { validateRegister, validateLogin, } = require("./auth");
const { validateCreateBook, validateGetBook, validateUpdateBook } = require("./books");
const { validateCreateJournal, validateGetJournal, validateUpdateJournal } = require("./journals");
const { validateCreate, validateGetItem, validateUpdate } = require("./users");
const { validateCreateBooksLoans, validateGetBooksLoans, validateUpdateBooksLoans } = require("./booksLoans");
const { validateCreateJournalLoans, validateUpdateJournalLoans } = require("./journalLoans");

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
  validateUpdateJournal,
  validateCreateBooksLoans,
  validateGetBooksLoans,
  validateUpdateBooksLoans,
  validateCreateJournalLoans,
  validateUpdateJournalLoans
}