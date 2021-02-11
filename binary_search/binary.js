function binary_search(arr, value) {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)

  while (arr[mid] !== value && left <= mid) {
    console.log(left, mid, right)
    if (arr[mid] == value) return mid
    if (value < arr[mid]) right = mid - 1
    else left = mid + 1
    mid = Math.floor((left + right) / 2)
  }

  return arr[mid] == value ? mid : -1
}

console.log(binary_search([1, 2, 3, 4, 5, 6], 0))
// [1,2,3,4,5,6]
//  l   m     r
