//Missing Number

// my work to return a missing number
// [0,3,1] output -2
// num start always 0


   let arr = [0,3,2,1,5];

     let missingNum = function(arr){
        let n = arr.length;
        let expectedSum = n*(n+1)/2;
        let sum = arr.reduce((acc, cur)=>acc+cur,0);
        return expectedSum -sum;
     }

     console.log(missingNum(arr));
     