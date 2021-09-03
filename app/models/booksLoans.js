const mongoose = require('mongoose')

const BookLoansScheme = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  book: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  status: {
    type: String,
    enum: ['borrowed', 'avaible'],
    default: 'borrowed'
  }

},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = mongoose.model('booksLoans', BookLoansScheme)