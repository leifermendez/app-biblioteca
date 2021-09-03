const { getLookBookLoans } = require("./getLookBookLoans");
const { getLookJournalLoans } = require("./getLookJournalLoans");
const { getLookLoans } = require("./getLookLoans");
const { getLookReportLoan, getLookReportView } = require("./getLookReport");

module.exports = {
  getLookBookLoans,
  getLookJournalLoans,
  getLookLoans,
  getLookReportLoan,
  getLookReportView

}