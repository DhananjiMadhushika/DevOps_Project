const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({

    UserName: {
        type : String,
        required: true
    },
    Password: {
        type : String,
        required: true
    },

    Role: {
        type : String,
        
    },
})

const User = mongoose.model("UserLogin" , loginSchema);  // document name and schema name

module.exports = User;  