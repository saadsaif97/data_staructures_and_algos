// I could not understand it
function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

console.log(selection_sort([2, 52, 5, 322, 6]))
