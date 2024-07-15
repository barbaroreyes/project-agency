const express =require('express');
const {getAllAgencies}  = require("../controllers/agencyControllers");
const routerAgency = express.Router();

routerAgency.get("/agency",getAllAgencies);


module.exports = routerAgency;
