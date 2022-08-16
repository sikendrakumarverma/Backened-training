router.get('/sol1', function(req, res){
    let arr = [1,2,3,4,5,7,8,9]
    let missingValue;
    for(let i = 1; i< arr.length; i++){
        if(arr[i] - arr[i-1] != 1) {
          missingValue = arr[i-1] + 1
          console.log(missingValue)
          break;
        }
    }
    res.send({missingValue})
})