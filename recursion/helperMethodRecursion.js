function findOdds(arr) {
  let odds = []

  function helper(input) {
    if (input.length == 0) return
    if (input[0] % 2 != 0) odds.push(input[0])
    helper(input.slice(1))
  }

  helper(arr)

  return odds
}

console.log(findOdds([1, 2, 3, 4, 5]))

// pure recursion
function collectOdds(arr) {
  let newArr = []
  if (arr.length == 0) return newArr
  if (arr[0] % 2 != 0) newArr.push(arr[0])

  newArr = newArr.concat(collectOdds(arr.slice(1))) // here goes the stack UP
  return newArr
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8]))
