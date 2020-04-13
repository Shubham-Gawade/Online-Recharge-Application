const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyname: { type: String, required: true }
});

module.exports = mongoose.model('companys', companySchema);