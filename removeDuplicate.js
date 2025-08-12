//remove duplicate from the sorted arr
// and return the distict elements count

let arr = [1,2,2,3,4,4,4,5];
//output = 5

function removeduplicate(arr){
    let j =1;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i+1];
            j++;
        }
    }
    return j;
}
console.log(removeduplicate(arr));
