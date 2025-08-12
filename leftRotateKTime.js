//rotate an array k times left rotate

let arr = [1,2,3,4,5];

function rotateArrKTimes(arr,k){
    let temp =[];
    let N = arr.length;
    k = k%N;
    for(let i =0;i<N;i++){
        temp[i]=arr[(i+k)%N];
    }
    return temp;
}

// console.log(rotateArrKTimes(arr,2));

//********************************************************************* */
//second way without extra spaace
//revese first k element then reverse least k+1 se .length tak
//and then swipe whole array with two pointer approach

//first revese k elements
let k=4;
reverse(0,k-1)
reverse(k,arr.length-1);
reverse(0,arr.length-1);
console.log(arr);


function reverse(i,j){
    while(i<j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]= temp;
        i++;
        j--;
    }
}

//listen *************************************
//if you are want  to right rotation just reverse all arr first and rest the same very easy