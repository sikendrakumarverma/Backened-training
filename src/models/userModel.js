const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    booknName: {
        type: String,
        unique: true,
        required: true
    },
    
    autherName: String,
    category:String,
    year:Number,
     tags:Array


    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     SiblingsName: String
    // },
    // motorcars: [ String  ]
},
{ timestamps: true });

module.exports = mongoose.model('Username', bookSchema) //users



// String, Number
// Boolean, Object/json, array