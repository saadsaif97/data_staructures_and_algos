// sumZero(sortedArray)
// accept: sorted array
// return: return the first pair that sums up zero
// sumZero([-2,-1,0,1,2,3,4]) // [-2,2]
// sumZero([-3,-2,-1,0,1,2,3,4]) // [-3,3]
// zero if not such value
// sumZero([0,1,2,3,4]) // 0
// sumZero([]) // 0

function sumZero(arr) {
  if (arr[0] >= 0) {
    return 0
  }

  for (const v1 of arr) {
    for (const v2 of arr) {
      if (v1 + v2 == 0) {
        return [v1, v2]
      }
    }
  }
  return 0
}
// time O(n^2)
// space O(1)

/**
 * --------------------------------------
 * --------------------------------------
 * --------------------------------------
 * -------------BEST SOLUTION------------
 * --------------------------------------
 * --------------------------------------
 * --------------------------------------
 *
 */

console.log(isZero([-2, -1, 0, 1, 2, 3, 4]))

// double pointer pattern
function isZero(arr) {
  if (arr[0] >= 0) {
    return 0
  }

  let l = 0
  let r = arr.length - 1
  while (l < r) {
    let sum = arr[l] + arr[r]
    if (sum == 0) {
      return [arr[l], arr[r]]
    } else if (sum > 0) {
      r--
    } else if (sum < 0) l++
  }

  return 0
}

// time O(n)
// space O(1)
