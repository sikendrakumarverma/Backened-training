const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

let persons =
   [
       {
           "name": "manish",
           "age":20,
           "votingstatus":false,
       },
       {
           "name": "gopal",
           "age":15,
           "votingstatus":false,
       },
       {
           "name": "pawan",
           "age":10,
           "votingstatus":false,
       },
       {
        "name": "vidya",
        "age":25,
        "votingstatus":false,
    },
    {
        "name": "vikash",
        "age":30,
        "votingstatus":false,
    },
   ]

   router.post('/persons', function (req, res) {

    let uservotingage= req.body.votingage
     let eligibleperson=[]
    

    for( let i=0;i<persons.length;i++ ) {
        if( persons[i].age>uservotingage ) {
            persons[i].votingstatus=true;
            eligibleperson.push(persons[i]) 
              
        }
        
    }
    res.send({"votingperson":eligibleperson,"status":true})
    
   })



module.exports = router;

