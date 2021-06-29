const arr = [1, 2,5, 3, 4,]
const maxEl = Math.max.apply(null, arr);
const minEl = Math.min.apply(null, arr);

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    
    for (let i=0; i < arr.length; i ++) {
         
         minSum += arr[i]
         maxSum += arr[i]
    }
  console.log(maxSum - maxEl)
  console.log(minSum - minEl)
}

miniMaxSum(arr)