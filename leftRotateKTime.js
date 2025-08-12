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

console.log(rotateArrKTimes(arr,2));
