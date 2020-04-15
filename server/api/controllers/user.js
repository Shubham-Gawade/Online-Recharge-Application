const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = async (req, res, next) => {
  
  const alreadyuser = await User.findOne({username: req.body.username});

  if(alreadyuser){
    return res.status(404).json({
      msg : "Username already exist"
    });
  }

  const user =new User({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobileno: req.body.mobileno,
    balance: "2000",
    username: req.body.username,
    password: req.body.password,
    transactionpassword: req.body.transactionpassword,
  });

  user.save().then((response) =>{
    res.status(200).json({ msg: "Registration Successful"  });
  }).catch((error)=>{
    res.status(500).json({ msg: "Registration failed" });
  });
  
};

exports.user_login = async (req, res, next) => {

  const user = await User.findOne({username: req.body.username ,password: req.body.password });

  if(!user) {
    return res.status(404).json({
      msg : "Login Failed"
    });
  }
  else {
    return res.status(201).json({
      msg : "Login Successful"
    });
  }  
};


exports.user_get_details = async (req, res, next) => {
  
  const userdetail = await User.findOne({username: req.body.username });

  if(!userdetail) {
    return res.status(404).json({
      msg : "UserDetails Not retrived"
    });
  }
  else {
    return res.status(201).json({
      msg : "UserDetails retrived",
      userdetail: userdetail
    });
  }  
};

exports.user_findbal = async (req, res, next) => {

  console.log("req.body",req.body);

  const user = await User.findOne({username: req.body.username });
  console.log("user",user)
  if(!user) {
    return res.status(404).json({
      msg : "Balance found Failed"
    });
  }
  else{
    return res.status(201).json({
      msg : "Balance found Successful",
      bal: user.balance
    });
  }
    
};

exports.user_update = async (req, res, next) => {
  console.log(req.body._id);
      const student = await User.update({username: req.body.username},{balance:req.body.balance});
      
    
      if(!student) {
        return res.status(404).json({
          msg : "update Failed"
        });
      }
      else{
        return res.status(201).json({
          msg : "Balance update Successful",
        });
      }
    
};

exports.user_checktransactionpass = async (req, res, next) => {

  console.log("req.bodytran",req.body);

  const user = await User.findOne({username: req.body.username ,transactionpassword: req.body.tranpass });

  if(!user) {
    return res.status(404).json({
      msg : "Incorrect Transaction password"
    });
  }
  else{
    return res.status(201).json({
      msg : "password check succes"
    });
  }
    
};
