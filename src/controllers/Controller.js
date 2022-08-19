const authorModel=require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let authorId= data.author_id
    if( !authorId ) {
        res.send({status:false,msg: "author id must be present"})
    }
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data = req.body
    let bookId= data.author_id
    if( !bookId ) {
        res.send({status:false,msg: "author id must be present"})
}
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getAuthorname= async function (req, res) {
    //let data= req.body
    // let temp=[]
    // for(let i=0;i<authorModel.length;i++)
    let savedData= await authorModel.find( { author_id:1 } ).select({  author_name:"Chetan Bhagat" })
    res.send({msg: savedData})
}
const getUpdatedbook= async function (req, res) {

    // let savedData= await bookModel.find( {  author_id:1 } ).select({name:"Two states"}).update({price:50},{$set:{price:100},{new:true}})
    // res.send({msg: savedData})
    let savedData= await bookModel.findOneAndUpdate({author_id:1},{name:"Two states"},{price:50},{$set:[{price:100},{new:true}]})
    res.send({msg: savedData})
    // let newprice= savedData.find({name:"Two states"})//.update({$set:{price:100},{new:true}})
    // res.send({msg:newprice })
}

const getPriceBook=async function(req, res) {
    let savedData= await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    res.send({msg: savedData})
    let 
}

module.exports.createAuthor=createAuthor 

module.exports.createBook=createBook

module.exports.getAuthorname=getAuthorname

module.exports.getUpdatedbook=getUpdatedbook

module.exports.getPriceBook=getPriceBook