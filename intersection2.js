
//  now you no need to unique elements only intersection behalf of occur in both

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(arr1, arr2) {
    if(arr1.length > arr2.length) [arr1,arr2] =[arr2,arr1];

    let res = [];
    for(let num of arr1){
        let index = arr2.indexOf(num);
        if(index != -1){
            res.push(num);
            arr2.splice(index,1)
        }
    }
    return res;
};
console.log(intersect([1,1,2,3],[1,1,3,6,7]));
