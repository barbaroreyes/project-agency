const Agency = require('../models/models');


exports.createAgency = async (req ,res) => {

 try {
      const agency = await  Agency.create({
        name: req.body.name,
        address: req.body.address,
          phone: req.body.phone,
          email: req.body.email,
          url: req.body.url
        ,
        logo: req.body.logo
      });
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
        res.json({ 
            status:500,
            success: false,
             error: "Server Error" ,
            });
    }
};

exports.updateAgency = async (req,res)=>{
    try {
        const agency = await Agency.findByIdAndUpdate(req.params.id ,
            req.body ,
           {new:true});
       res.json({
           status:200,
           data:agency,
       })
        
    } catch (error) {
        console.error("Error updating agencies");
        res.json({
            status:500,
            success: false,
            error: "Server Error" ,
            });
        }
  }

  exports.deleteAgency = async (req , res)=>{
    try {
        const agencyToDelete = await Agency.findByIdAndDelete(req.params.id);
        if(!agencyToDelete){
            return res.json({
                status: 500,
                mesg:"Agency not found",
            })
        }
        res.json({
            status: 200,
            msg:"Agency was deleted",
        })
    } catch (error) {
        console.error("Error deleting agency");
        res.json({
            status:500,
            success: false,
            error: "Server Error" ,
            });
        }
    }
  
