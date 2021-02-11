function binary_search(arr, value) {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)
  let m = arr[mid]
  let l = arr[left]
  let r = arr[right]

  while (m != value || right - left == 1) {
    if (m == value) return mid
    if (m < value) left = mid
    if (value < m) right = mid
    mid = Math.floor((left + right) / 2)
    m = arr[mid]
  }
  return -1
}

console.log(binary_search([1, 2, 3, 4, 5, 6], 4))
