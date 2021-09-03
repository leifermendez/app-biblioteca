const { httpError } = require('../helpers/handleError')
const { getLookReportLoan, getLookReportView } = require('../middleware/db')
const bookModel = require('../models/books')
const journalModel = require('../models/journals')
const usersModel = require('../models/users')

const getReport = async (type = '') => {

  try {

    let data;
    switch (type) {
      case 'userLoan':
        const query = {
          role: 'student'
        }
        data = await getLookReportLoan(usersModel, query)
        return data
      case 'journalLoan':
        data = await getLookReportLoan(journalModel)
        return data
      case 'journalViews':
        data = await getLookReportView(journalModel)
        return data
      case 'bookLoan':
        data = await getLookReportLoan(bookModel)
        return data
      case 'bookViews':
        data = await getLookReportView(bookModel)
        return data
      default:
        break;
    }
  } catch (error) {

  }


}

const getItems = async (req, res) => {
  try {
    const { report = null } = req.query
    const data = await getReport(report)
    res.send({ data })
  } catch (e) {
    httpError(res, e)
  }
}


module.exports = {
  getItems
}