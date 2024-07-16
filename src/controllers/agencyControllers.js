const Agency = require('../models/models');


exports.createAgency = async (req ,res) => {

 try {
      const agency = await  Agency.create(req.body);
      res.json({
        status: 200,
        msg:"data received",
        data: agency,
      });
      console.log("agency created" , agency)
 } catch (error) {

    console.error("Error retrieving agencies", error);
    res.json({ status: 500,
            success: false,
            error: "creating agency" 
        });
 }
}

exports.getAllAgencies = async (req, res) => {
    try {
        const allAgencies = await Agency.find({})
        .populate()
        .exec();

        res.json({
            status: 200,
            success: true,
            data: allAgencies
        });
    } catch (error) {
        console.error("Error retrieving agencies", error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
};
