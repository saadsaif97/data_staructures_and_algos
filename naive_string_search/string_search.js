function string_search(long, short) {
  let counter = 0
  for (const char of long) {
    for (const c of short) {
      if (c == char && c == short.slice(-1)) {
        counter++
      }
    }
  }
  return counter
}

console.log(string_search('abcdef', 'def'))
