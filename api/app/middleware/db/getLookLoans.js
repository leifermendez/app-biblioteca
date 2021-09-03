const mongoose = require('mongoose')

const getLookLoans = (model, id = '') => {
  return model.aggregate([
    { $match: { status: 'borrowed', user: mongoose.Types.ObjectId(id) } }
  ])
}
module.exports = { getLookLoans }
