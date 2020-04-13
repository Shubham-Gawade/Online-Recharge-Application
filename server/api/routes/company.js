const express = require("express");
const router = express.Router();

const CompanyController = require('../controllers/company');

router.get("/companyname", CompanyController.get_company_name);

module.exports = router;