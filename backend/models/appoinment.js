const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appoinmentSchema = new Schema({

    Client_Name : {
        type : String,
        required: true
    },

    Client_TelNo : {
        type : String,
        required: true
    },
     
    Category : {
        type : String,
        
    },
    
    Service_name : {
        type : String,
        required: true
    },
    Branch : {
        type : String,
        
    },

    Date : {
        type : String,
        required: true
    },

    Time : {
        type : String,
        required: true
    },


    Service_Level : {
        type : String,
        required: true
    },

    
})

const Appoinment = mongoose.model("Appoinment" , appoinmentSchema);  // document name and schema name

module.exports = Appoinment;    
