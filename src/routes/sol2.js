router.get('/sol2', function(req, res){
    let arr = [33, 34, 35, 37, 38]
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