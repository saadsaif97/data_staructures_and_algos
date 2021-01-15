const { performance } = require('perf_hooks')

function addUpto(num) {
  let sum = 0
  for (let i = 1; i < num; i++) {
    sum += i
  }
  return sum
}

const t1 = performance.now()
console.log(addUpto(100000000))
const t2 = performance.now()

console.log(`Time: __${t2 - t1}__`)

// HOW THE RUN TIME OF FUNCTION GROWS AS THE INPUT GROWS, THIS RELATION IS CALLED BIG O

// HERE THE NUMBER OF OPERATIONS INCREASE WITH THE SIZE OF INPUT O(n)

/**
 * Rather than the time for measuring the performance,
 * we can count consider the number of operations.
 *
 * With the increase of n, performance time increases in above code
 **/
