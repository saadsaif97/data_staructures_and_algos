const { performance } = require('perf_hooks')

function addUpto(n) {
  return (n * (n + 1)) / 2
}

const t1 = performance.now()
console.log(addUpto(100000000))
const t2 = performance.now()

console.log(`Time: __${t2 - t1}__`)

/**
 * HERE NUMBER OF OPERATIONS ARE CONSTANT, NO MATTER HOW MUCH BIG THE INPUT IS O(1)
 */
