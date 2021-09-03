const { getLookLoans } = require("../middleware/db")
const booksLoansModel = require('../models/booksLoans')
const journalsLoansModel = require('../models/journalsLoans')

const loansBorrowed = async (id = '') => {

  try {
    const bookLoans = await getLookLoans(booksLoansModel, id)
    const journalLoans = await getLookLoans(journalsLoansModel, id)
    const data = parseDate(bookLoans, journalLoans)

    return data

  } catch (error) {
    return error
  }
}

const parseDate = (bookArr = [], JournalArr = []) => {

  const newArr = [...bookArr, ...JournalArr]

  return newArr
}

module.exports = {
  loansBorrowed
}