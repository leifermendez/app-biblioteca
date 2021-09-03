const { httpError } = require('../helpers/handleError')
const { matchedData } = require('express-validator')
const booksLoansModel = require('../models/booksLoans')
const bookModel = require('../models/books')
const usersModel = require('../models/users')
const { getLookBookLoans } = require('../middleware/db')
const { loansBorrowed } = require('../helpers/loansborrowed')



const updateBook = async (id = '') => {
  try {
    const book = await bookModel.findById({ _id: id })
    book.available--
    book.amountLoans++
    book.status = 'borrowed'
    await bookModel.findByIdAndUpdate(book._id, book, {
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
    const data = await getLookBookLoans(booksLoansModel)
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
    const data = await getLookBookLoans(booksLoansModel, query)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}
const createItem = async (req, res) => {
  try {
    const user = req.user._id
    const loans = await loansBorrowed(user)
    req = matchedData(req)

    if (loans.length >= 10) {
      res.status(422)
      return res.send({ error: `Ya has superado el limite maximo de prestamos de libros y revistas` })
    }
    req.user = user
    const data = await booksLoansModel.create(req)
    await updateBook(data.book)
    await updateUser(data.user)

    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}
const updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    const book = await bookModel.findById({ _id: req.book })
    book.available++
    book.status = 'avaible'
    const data = await bookModel.findByIdAndUpdate(book._id, book, {
      new: true,
      runValidators: true
    })

    await booksLoansModel.findByIdAndUpdate(req.id, { status: 'avaible' }, {
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
  updateItem,
  getItems,
  getItemsUser
}