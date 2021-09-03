const getLookBookLoans = (model, query = {}) => {
  return model.aggregate([
    { $match: query },
    {
      $lookup: {
        from: 'books',
        let: { book: '$book' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$$book', '$_id'] }
                ]
              }
            }
          }
        ],
        as: 'book_loan'
      }
    },
    { $unwind: '$book_loan' },
    {
      $group: {
        _id: '$book',
        idLoan: { $first: '$_id' },
        idBook: { $first: '$book' },
        user: { $first: '$user' },
        status: { $first: '$status' },
        amountViews: { $first: '$book_loan.amountViews' },
        amountLoans: { $first: '$book_loan.amountLoans' },
        author: { $first: '$book_loan.author' },
        title: { $first: '$book_loan.title' },
        edition: { $first: '$book_loan.edition' },
        keyword: { $first: '$book_loan.keyword' },
        description: { $first: '$book_loan.description' },
        theme: { $first: '$book_loan.theme' }
      }
    }

  ])
}
module.exports = { getLookBookLoans }
