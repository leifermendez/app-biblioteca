const { httpError } = require('../helpers/handleError')
const { matchedData } = require('express-validator')
const JournalModel = require('../models/journals')

const getItems = async (req, res) => {
  try {
    const data = await JournalModel.find({})
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}
const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const data = await JournalModel.findById({ _id: req.id })
    data.amountViews++
    await JournalModel.findByIdAndUpdate(data._id, data, {
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
    const data = await JournalModel.create(req)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}

const updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    const data = await JournalModel.findByIdAndUpdate(req.id, req, {
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
    await JournalModel.findByIdAndRemove(req.id)
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