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
    Balance: "2000",
    username: req.body.username,
    password: req.body.password,
    transactionId: req.body.transactionId,
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