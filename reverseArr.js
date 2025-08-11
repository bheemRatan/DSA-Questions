
let arr = [1,2,3,4,1];

//arr.reverse();
//for loop

// two pointer approach

let i =0;
let j= arr.length -1;

while(i<j){
    [arr[i],arr[j]]= [arr[j],arr[i]];
    i++;
    j--;
}
console.log(arr);
