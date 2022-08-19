const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
    name:String,
    //  author_id: {
    //     type:Number,
    //     required:true
    // }
    author_id:Number,
    price:Number,
    ratings:Number

    

    
}, { timestamps: true });

module.exports = mongoose.model('Book', booksSchema) // books

