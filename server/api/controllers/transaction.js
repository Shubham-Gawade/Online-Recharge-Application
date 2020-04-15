const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const TransactionDetail = require("../models/transaction");


exports.company_recharge = async (req, res, next) => {

    const tran =new TransactionDetail({
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        mobileno: req.body.mobileno,
        company: req.body.company,
        amount: req.body.amount
      });
    
      tran.save().then((response) =>{
        res.status(200).json({ msg: "transaction saved" });
      }).catch((error)=>{
        res.status(500).json({ msg: "transaction not saved" });
      });
      
  };
  
  exports.company_showtransaction = async (req, res, next) => {

    console.log("req.body",req.body);
  
    const comp = await TransactionDetail.find({username: req.body.username});
    
    if(!comp) {
      return res.status(404).json({
        msg : "transaction Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "transaction Successful",
        pack: comp
      });
    }
     
  };

  exports.company_showtransaction = async (req, res, next) => {

    console.log("req.body",req.body);
  
    const details = await TransactionDetail.find({username: req.body.username});
    
    if(!details) {
      return res.status(404).json({
        msg : "transaction Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "transaction Successful",
        details: details
      });
    }
     
  };
