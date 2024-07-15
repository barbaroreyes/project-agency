const mongoose =require('mongoose');
const {Schema , model} = mongoose;


const agencySchema = new Schema({
    name:"String",
    contact:{
        address:String,
        phone:String,
        email:String,
        url:String
    },
    logo:String,

});





const Agency = model('Agency',agencySchema);
 module.exports = Agency;