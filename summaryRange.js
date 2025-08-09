// summary Range

// given a sorted array and i need to make range and create new arr
// [1,2,3,5,6,9] output -> ['1->3','5->6','9'];

let arr = [1, 2, 3, 5, 6, 9];

function summaryRange(arr) {
  let result = [];
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1 || arr[i + 1] !== arr[i] + 1) {
      if (i == start) {
        result.push(arr[start].toString());
        start = i + 1;
      } else {
        result.push(`${arr[start]}->${arr[i]}`);
        start = i + 1;
      }
    }
  }
  return result;
}

console.log(summaryRange(arr));
