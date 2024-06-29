const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servicesSchema = new Schema({

    Service_Name: {
        type : String,
        required: true
    },

    Service_Category: {
        type : String,
        required: true
    },

    Service_Description: {
        type : String,
        required: true
    },

    Service_Duration: {
        type : String,
        required: true
    },

    Service_Price: {
        type : Number,
        required: true
    },

    

    Product: 
    {
        type : String,
        required: true
    },


    Service_status: 
    {
        type : String,    // availability of the service
        required: true
    },

    images: [
        {
          filename: String,
          path: String
        },
      ],
        


})

const Service = mongoose.model("Service" , servicesSchema);  // document name and schema name

module.exports = Service;    