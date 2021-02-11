// my solution
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }

  let frq1 = {}
  let frq2 = {}
  for (const val of arr1) {
    let sqr = val ** 2
    frq1[sqr] = ++frq1[sqr] || 1
  }
  for (const val of arr2) {
    frq2[val] = ++frq2[val] || 1
  }
  for (const key in frq1) {
    if (frq1[key] != frq2[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3], [1, 4, 9])) //True
console.log(same([1, 2, 3], [1, 9])) //False
console.log(same([1, 2, 1], [4, 1, 4])) //False

/**
 * This solution is O(n)
 *
 * indexOf is also a loop
 */
