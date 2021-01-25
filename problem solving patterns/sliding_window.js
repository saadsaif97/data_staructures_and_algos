// input: array, n
// return: max sum of n consective numbers in array

/**
 *
 * Inefficient
 *
 */

function maxSum(arr, n) {
  let max = -Infinity
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0
    for (let j = 0; j < n; j++) {
      temp += arr[i + j]
    }
    if (max < temp) {
      max = temp
    }
  }
  return max
}

// console.log(maxSum([1, 2, 3, 4, 5, 0, 1], 3))

/**
 *
 * Efficient Sliding window
 *
 */

//         i
//  [1,2,3,4,5,6,5,7,8,9,3]
//     -   -

function maxSubarraySum(arr, n) {
  if (arr.length < n) {
    return 'Invalid array'
  }

  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < n; i++) {
    tempSum += arr[i]
  }

  maxSum = tempSum
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum
}

console.log(maxSubarraySum([1, 2], 3))
