const arr = [1, 2, 5, 3, 4]

function miniMaxSum(arr) {
    let sum = 0
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

        sum += arr[i]
    }
  console.log(sum - minEl)
  console.log(sum - maxEl)
}

miniMaxSum(arr)