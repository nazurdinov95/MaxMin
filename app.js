const arr = [1, 2, 3, 4, 5]


function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;

    for (let i=0; i < arr.length; i ++) {
         
         minSum += arr[i]
    }
    for (let i=1; i < arr.length; i ++) {
         
        maxSum += arr[i]
   }
   document.getElementById("printMin").innerHTML ="Min"+ minSum + "<br/>"
   document.getElementById("printMax").innerHTML ="Max"+ maxSum
}


miniMaxSum(arr)