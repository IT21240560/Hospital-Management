const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({

    name : {
        type : String,
        required: true
    },

    age : {
        type : Number,
        required: true
    },

    gender : {
        type : String,
        required: true
    },

    id :{
        type : String,
        required : true
    },

    admit_Date : {
        type : String,
        required : true
    },

    discharge_Date : {
        type : String,
        required: true
    }
})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;