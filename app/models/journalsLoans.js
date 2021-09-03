const mongoose = require('mongoose')

const JournalLoansScheme = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  journal: {
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

module.exports = mongoose.model('journalsLoans', JournalLoansScheme)