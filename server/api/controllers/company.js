const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Company = require("../models/company");

exports.get_company_name = async (req, res, next) => {

  const companyNames = await Company.find({ });
  if(!companyNames) {
    return res.status(404).json({
      msg : "List Not Retrived"
    });
  }
  else {
    return res.status(201).json({
      msg : "List Retrived",
      companyNames: companyNames
    });
  }  
};