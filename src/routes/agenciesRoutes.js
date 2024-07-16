const express =require('express');
const {getAllAgencies , createAgency }  = require("../controllers/agencyControllers");
const routerAgency = express.Router();

routerAgency.get("/agency",getAllAgencies);
routerAgency.post("/agency",createAgency );

module.exports = routerAgency;
