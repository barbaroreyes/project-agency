const Agency = require('../models/models');

exports.getAllAgencies = async (req, res) => {
    try {
        const allAgencies = await Agency.find({}).populate().exec();

        res.status(200).json({
            success: true,
            data: allAgencies
        });
    } catch (error) {
        console.error("Error retrieving agencies", error);
        res.status(500).json({ success: false, error: "Server Error" });
    }
};
