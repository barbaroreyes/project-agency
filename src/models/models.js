const mongoose =require('mongoose');
const {Schema , model} = mongoose;


const agencySchema = new Schema({
    name:String,
    contact:{
        address:String,
        phone:String,
        email:String,
        url:String
    },
    logo:String,
    trip_ref:[{
        ref: "Trip",
        type:mongoose.Schema.Types.ObjectId
    }],
    trip_ref:[{
        ref: "Review",
        type:mongoose.Schema.Types.ObjectId
    }]

});





const Agency = model('Agency',agencySchema);
 module.exports = Agency;