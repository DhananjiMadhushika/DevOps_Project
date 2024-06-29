const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    Name: {
        type : String,
        required: true
    },

    Position: {
        type : String,
        required: true
    },

    Tel_No: {
        type : String,
        required: true
    },

    Email: {
        type : String,
        required: true
    },
    
    images: [
        {
          filename: String,
          path: String
        },
      ],
        


})

const Employee = mongoose.model("Employee" , employeeSchema);  // document name and schema name

module.exports = Employee;    