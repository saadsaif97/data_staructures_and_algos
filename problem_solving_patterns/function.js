function charCount(str) {
  let obj = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1
    }
  }
  return obj
}

console.log(charCount('aaa')) //{a:3}
console.log(charCount('Hi hello!')) //{h:2, i:1, e:1, l:2, o:1}
