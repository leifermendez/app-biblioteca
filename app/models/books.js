const mongoose = require('mongoose')

const BookScheme = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  edition: {
    type: String,
    required: true
  },
  keyword: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  copy: {
    type: String,
    required: true
  },
  available: {
    type: String,
    required: true
  },
  amountViews: {
    type: Number,
    default: 0
  },
  amountLoans: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['borrowed', 'avaible'],
    default: 'avaible'
  }
},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = mongoose.model('books', BookScheme)