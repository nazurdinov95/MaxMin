const arr = [1, 2, 5, 3, 4]

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    let maxEl = 0
    let minEl = 1
    
    for (let i=0; i < arr.length; i ++) {

        if (arr[i] > maxEl)
        {
            maxEl = arr[i]
        }
        
        if (arr[i] < minEl)
        {
            minEl = arr[i]
        }

        minSum += arr[i]
        maxSum += arr[i]
    }
  console.log(maxSum - minEl)
  console.log(minSum - maxEl)
}

miniMaxSum(arr)