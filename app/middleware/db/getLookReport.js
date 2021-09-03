
const getLookReportLoan = (model, query = {}) => {
  return model.aggregate([
    { $match: query },
    { $sort: { amountLoans: -1 } },
    { $limit: 10 }
  ])
}
const getLookReportView = (model) => {
  return model.aggregate([

    { $sort: { amountViews: -1 } },
    { $limit: 10 }
  ])
}

module.exports = { getLookReportLoan, getLookReportView }
