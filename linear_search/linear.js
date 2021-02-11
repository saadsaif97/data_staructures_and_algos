// find
// findIndex
// indexOf
// includes

function linear_search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element == val) return i
  }
  return -1
}

console.log(linear_search([1, 2, 3, 4, 5, 6, 7, 8], 8))
