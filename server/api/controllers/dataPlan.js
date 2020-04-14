const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const companyDataPack = require("../models/dataPlan");

exports.get_data = async (req, res, next) => {

  console.log(req.body.companyname);
  const DataPack = await companyDataPack.find({ companyname:req.body.companyname });
  console.log(DataPack);

  if(!DataPack) {
    return res.status(404).json({
      msg : "DataPack List Not Retrived"
    });
  }
  else {
    return res.status(201).json({
      msg : "DataPack Retrived",
      DataPack: DataPack
    });
  }  
};