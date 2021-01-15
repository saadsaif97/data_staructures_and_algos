const { performance } = require('perf_hooks')

function printPair(n) {
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count += 1
    }
  }
  return count
}

const t1 = performance.now()
console.log(printPair(100000))
const t2 = performance.now()

console.log(`Time: __${(t2 - t1) / 1000} s__`)

/**
 * FOR NESTED LOOP, NUMBER OF OPERATIONS INCREASE BY SQUARE OF INPUT VALUE O(n^2)
 *
 * AS N GROWS, THE RUNTIME ROUGHLY GROWS PROPORTIONAL TO n^2
 */
