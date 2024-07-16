const express =require('express');
const {getAllAgencies , createAgency ,updateAgency ,deleteAgency}  = require("../controllers/agencyControllers");
const routerAgency = express.Router();

routerAgency.get("/agency", getAllAgencies);
routerAgency.post("/agency",createAgency );
routerAgency.put("/agency/:id", updateAgency );
routerAgency.delete("/agency/:id", deleteAgency)

module.exports = routerAgency;
