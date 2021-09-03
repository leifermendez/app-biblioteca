const { httpError } = require('../helpers/handleError')
const { matchedData } = require('express-validator')
const bookModel = require('../models/books')

const getItems = async (req, res) => {
  try {
    const data = await bookModel.find({})
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}
const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const data = await bookModel.findById({ _id: req.id })
    data.amountViews++
    await bookModel.findByIdAndUpdate(data._id, data, {
      new: true,
      runValidators: true
    })

    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}


const createItem = async (req, res) => {
  try {
    req = matchedData(req)
    const data = await bookModel.create(req)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}

const updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    const data = await bookModel.findByIdAndUpdate(req.id, req, {
      new: true,
      runValidators: true
    })
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    await bookModel.findByIdAndRemove(req.id)
    res.send({ msg: 'DELETED' })
  } catch (e) {
    httpError(res, e)
  }
}

module.exports = {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
}