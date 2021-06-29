const arr = [1, 2, 5, 3, 4]

function miniMaxSum(arr) {
    let sum = 0
    let max = 0

    let min = Infinity;

    for (let i=0; i < arr.length; i ++) {
        if (arr[i] < min) {
            min = arr[i];
          }

        if(arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i]
    }
  console.log(sum - min)
  console.log(sum - max)
}
miniMaxSum(arr)