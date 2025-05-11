const mongoose = require('mongoose')
const LoanDetails = new mongoose.Schema({
        Fullname: String,
        MoneyNeed: String,
        LoanMonth: String,
        status: String,
        reason: String,
        address: String      
})

const loanModel = mongoose.model('loanDetails',LoanDetails)
module.exports =  loanModel 