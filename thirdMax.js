//return the third max num
//if there are no one third max in that condition you just need to return maxium value of arr

let arr = [9,4,1,2,3,1,4,5];

 const thirdMax =function(arr){
    let distict = [... new Set(arr)];
    //sort decending order
    distict.sort((a,b)=>b-a);
    return distict.length>2?distict[2]:distict[0]
 }

console.log( thirdMax(arr));


