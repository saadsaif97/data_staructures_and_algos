function string_search(long, short) {
  let counter = 0

  for (let i in long) {
    i = parseInt(i)
    for (let j in short) {
      j = parseInt(j)
      // console.log(short[j], long[i + j])
      if (short[j] !== long[i + j]) break
      if (short[j] === long[i + j] && j === short.length - 1) counter++
    }
  }
  return counter
}

console.log(string_search('abc f', ' f'))

// abcdef
// i + j is like sliding window
// i + j means check from short start and long in que
