function search_naive(long, short) {
  let counter = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < long.length; j++) {
      const char_in_long_to_compare = long[i + j]
      const char_in_short = short[j]
      if (char_in_long_to_compare !== char_in_short) break
      if (char_in_long_to_compare === char_in_short && j === short.length - 1)
        counter++
    }
  }
  console.log(counter)
}

search_naive('adsdasda', 'dsfsdfdsfds')

// abcde
//   cd
