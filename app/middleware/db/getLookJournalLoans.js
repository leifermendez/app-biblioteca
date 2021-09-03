
const getLookJournalLoans = (model, query = {}) => {
  return model.aggregate([
    { $match: query },
    {
      $lookup: {
        from: 'journals',
        let: { journal: '$journal' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$$journal', '$_id'] }
                ]
              }
            }
          }
        ],
        as: 'journal_loan'
      }
    },
    { $unwind: '$journal_loan' },
    {
      $group: {
        _id: '$journal',
        idLoan: { $first: '$_id' },
        idJournal: { $first: '$journal' },
        user: { $first: '$user' },
        status: { $first: '$status' },
        amountViews: { $first: '$journal_loan.amountViews' },
        amountLoans: { $first: '$journal_loan.amountLoans' },
        author: { $first: '$journal_loan.author' },
        title: { $first: '$journal_loan.title' },
        edition: { $first: '$journal_loan.edition' },
        keyword: { $first: '$journal_loan.keyword' },
        description: { $first: '$journal_loan.description' },
        theme: { $first: '$journal_loan.theme' },
        specimens: { $first: '$journal_loan.specimens' }
      }
    }
  ])
}
module.exports = { getLookJournalLoans }
