const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()
    abc.moviesname()
    abc.films()
    abc.idvalue()
    res.send('My second ever api!')
});

router.get('/movies', function (req, res){
    let movies = [ 'suryawansam', 'three idiot', 'pk', 'nadiya ke par' ]
    res.send(movies)
})
router.get('/indexNumber', function (req, res){
    let movies = [ 'suryawansam', 'three idiot', 'pk', 'nadiya ke par' ]
    let indexNumber = 1
    if(indexnum==1) {
            console.log(movies[1]);
        } else if(indexnum==2) {
            console.log(movies[2]);
        } else if(indexnum==3) {
            console.log(movies[3]);
        } else if(indexnum==0) {
            console.log(movies[0]);
        } else{
          console.log('Enter a valid index number')
        }

    res.send(indexNumber)
})


router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;