const mongoose = require('mongoose')

const JournalScheme = new mongoose.Schema({
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
  description: {
    type: String,
    required: true
  },
  currentFrequency: {
    type: String,
    required: true
  },
  specimens: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  keyword: {
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
},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = mongoose.model('journals', JournalScheme)
