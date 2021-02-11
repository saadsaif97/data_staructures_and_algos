// Accepts sorted array
// returns the count of unique values

console.log(countUnique([1, 1, 2, 2])) //2
console.log(countUnique([2, 2, 2, 2])) //1
console.log(countUnique([2, 2, 2, 2, 5, 5, 6])) //3

// HINT
// i sets back
// j moves forward
// if left == right: j++
// else make left = rigth and increase i
// return i+1

// my solution after getting hint
function countUnique(arr) {
  let i = 0
  let j = 1
  while (j < arr.length) {
    let left = arr[i]
    let right = arr[j]
    left == right ? j++ : i++, j++, (left = right)
  }
  return i + 1
}

// provided solution
function uniques(arr) {
  let i = 0
  for (const j in arr) {
    let left = arr[i]
    let right = arr[j]
    if (left != right) {
      i++
      left = right
    }
  }
  return ++i
}
