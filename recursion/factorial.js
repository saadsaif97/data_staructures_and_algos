function fac(num) {
  let total = 1
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}

console.log(fac(5))

function facRec(num) {
  if (num == 1) return 1
  return num * facRec(num - 1)
}

console.log(facRec(5))
