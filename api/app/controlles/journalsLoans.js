const { httpError } = require('../helpers/handleError')
const { matchedData } = require('express-validator')
const journalLoansModel = require('../models/journalsLoans')
const journalModel = require('../models/journals')
const usersModel = require('../models/users')
const { getLookJournalLoans } = require('../middleware/db')
const { loansBorrowed } = require('../helpers/loansborrowed')


const updateJournal = async (id = '') => {
  try {
    const journal = await journalModel.findById({ _id: id })
    journal.available--
    journal.amountLoans++
    journal.status = 'borrowed'
    const data = await journalModel.findByIdAndUpdate(journal._id, journal, {
      new: true,
      runValidators: true
    })
  } catch (e) {
    return e
  }
}
const updateUser = async (id = '') => {
  try {
    const user = await usersModel.findById({ _id: id })
    user.amountLoans++
    await usersModel.findByIdAndUpdate(user._id, user, {
      new: true,
      runValidators: true
    })
  } catch (e) {
    return e
  }
}
const getItems = async (req, res) => {
  try {
    const data = await getLookJournalLoans(journalLoansModel)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}

const getItemsUser = async (req, res) => {
  try {
    const user = req.user._id
    const query = {
      user,
      ...req.query
    }
    const data = await getLookJournalLoans(journalLoansModel, query)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}

const createItem = async (req, res) => {
  try {
    const user = req.user._id
    const loans = await loansBorrowed(user)
    if (loans.length >= 10) {
      res.status(422)
      return res.send({ error: `Ya has superado el limite maximo de prestamos de libros y revistas` })
    }
    req = matchedData(req)
    req.user = user
    const data = await journalLoansModel.create(req)
    await updateJournal(data.journal)
    await updateUser(data.user)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}
const updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    const journal = await journalModel.findById({ _id: req.journal })
    journal.available++
    journal.status = 'avaible'

    const data = await journalModel.findByIdAndUpdate(journal._id, journal, {
      new: true,
      runValidators: true
    })
    await journalLoansModel.findByIdAndUpdate(req.id, { status: 'avaible' }, {
      new: true,
      runValidators: true
    })

    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}
module.exports = {
  createItem,
  getItems,
  getItemsUser,
  updateItem
}