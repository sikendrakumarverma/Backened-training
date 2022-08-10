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

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

   router.post('/players', function (req, res) {

    let bodyplayer= req.body
    let bodyplayername= bodyplayer.name
    let isbodyplayername= false

    for( let i=0;i<players.length;i++ ) {
        if( players[i].name==bodyplayername ) {
            isbodyplayername=true;
            res.send('This player is already exist please enter another player name')
            break; 
        } else {
            players.push(bodyplayer)
            res.send(  { players }  )
        }
    }
   })



module.exports = router;

