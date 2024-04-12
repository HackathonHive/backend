const mongoose = require('mongoose');



const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required:true
    
    },
    instructor:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

});