const mongoose = require('mongoose');

const DataPack = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyname: { type: String, required: true },
    packinfo: { type: String, required: true }
});

module.exports = mongoose.model('dataplan', DataPack);