const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/getUserDetails", UserController.user_get_details);

router.post("/findbal", UserController.user_findbal);

router.put("/updateUserData", UserController.user_update);

router.post("/checktransactionpass", UserController.user_checktransactionpass);

module.exports = router;