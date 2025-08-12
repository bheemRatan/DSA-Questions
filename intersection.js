//intersecton is a set of set a or set b
// intersection has only element which or occurs both set a or set b;

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5,6];
//output =>  [2,3,4];

function intersectionArr(arr1,arr2){
      let set1 = new Set(arr1);
      let set2 = new Set(arr2);

      let result = [];
      for(let num of set1){
        if(set2.has(num)){
            result.push(num);
        }
      }
      return result;
}
console.log(intersectionArr(arr1,arr2));


//second way to achieve it

function IntersectionArr2(arr1,arr2){
    return [...new Set(arr1.filter(num=>arr2.includes(num)))]
}
console.log(IntersectionArr2(arr1,arr2));