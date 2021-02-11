function sort(arr) {
  // array.sort() sorts inplace depending upon the unicode
  return arr.sort((a, b) => a - b)
}

let a = [1, 2, 3, 4, 2, 1, 3, 5]
sort(a)

function sort_by_length(arr) {
  return arr.sort((a, b) => a.length - b.length)
}

let b = ['Ding', 'Cat', 'Elephant']
sort_by_length(b)

console.log(b)
