function power(base, expo) {
  if (base == 0) return 0

  if (expo === 0) return 1
  return base * power(base, expo - 1)
}

console.log(power(3, 3))
// 27 < == power(3, 3)
//     9 < == power(3, 2)
//         3 < == power(3, 1)
//             1 < == power(3, 0)

function factorial(n) {
  if (n == 0) return 0

  if (n == 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(5))
// 120 < == fac(5)
// 24 < == fac(4)
// 6 < == fac(3)
// 2 < == fac(2)
// 1 < == fac(1)

function productOfArray(arr) {
  if (arr.length == 0) return 0

  if (arr.length == 1) return arr[0]
  return arr.pop() * productOfArray(arr.slice(0, arr.length))
}
console.log(productOfArray([]))

function recursiveRange(n) {
  if (n === 0) return 0

  return n + recursiveRange(n - 1)
}
console.log(recursiveRange(3))

// I did't understand following problem
function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
