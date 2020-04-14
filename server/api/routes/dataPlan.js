const express = require("express");
const router = express.Router();

const CompanyController = require('../controllers/dataPlan');

router.post("/companyDataPack", CompanyController.get_data);

module.exports = router;