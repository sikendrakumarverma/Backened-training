// const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

     let allBooks= await BookModel.find( )//.count() // COUNT

     res.send({msg: allBooks}) 
}
const BookList= async function (req, res) {

    let allBooks= await BookModel.find( { bookName: "The Lord of krisna", authorName : "sikendra"  })

    res.send({msg: allBooks})
}
const getBooksInYear= async function (req, res) {

    let allBooks= await BookModel.find( { year:req.body.year  })

    res.send({msg: allBooks})
}
const getParticularBooks= async function (req, res) {
    let data= req.body
    let allBooks= await BookModel.find( { data  })

    res.send({msg: allBooks})
}
const getXINRBooks= async function (req, res) {

    let allBooks= await BookModel.find( { $or:[{indianPrice:"RS. 2000INR"},{indianPrice:"RS. 1000INR"},{indianPrice:"RS. 500INR"}]  })

    res.send({msg: allBooks})
}
const getRandomBooks= async function (req, res) {

    let allBooks= await BookModel.find( { $or:[{stockAvailable: "true"},{$gt:{totalPages:500}}] })

    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.BookList=BookList
module.exports. getBooksInYear= getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
