// function bubble_sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr, arr[j], arr[j + 1])
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(bubble_sort([3, 6, 1, 3, 7]))

// [1,9,5,5,1,7]
// [1,5,9,5,1,7]

function bubble(arr) {
  let swapped = false
  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubble([2, 34, 1, 5, 32, 3, 72]))
