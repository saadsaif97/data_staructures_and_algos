// my solution
function areAnagrams(str1, str2) {
  if (str1.length != str2.length) {
    return false
  }

  let frq1 = {}
  let frq2 = {}
  for (const char of str1) {
    frq1[char] = ++frq1[char] || 1
  }
  for (const char of str2) {
    frq2[char] = ++frq2[char] || 1
  }
  for (const key in frq2) {
    if (frq1[key] != frq2[key]) {
      return false
    }
  }
  return true
}

console.log(areAnagrams('iceman', 'cinema')) // true
console.log(areAnagrams('anagram', 'naragam')) // true
console.log(areAnagrams('car', 'rat')) // false

/**
 * -------------------------------------------------------
 * -------------------------------------------------------
 * -------------------------------------------------------
 * -------------GIVEN SOLUTION----------------------------
 * -------------------------------------------------------
 * -------------------------------------------------------
 * -------------------------------------------------------
 */

// these will run due to hoisting
console.log(anagram('iceman', 'cinema')) // true
console.log(anagram('anagram', 'naragam')) // true
console.log(anagram('car', 'rat')) // false

// given solution
function anagram(one, two) {
  if (one.length != two.length) {
    return false
  }

  let lookup = {}
  for (const char of one) {
    // if in lookup: increase frequency else make equal to one
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1)
  }

  for (const char of two) {
    // return if not in lookup or is zero
    if (!lookup[char]) {
      return false
    } else {
      //remove frequency if seen in two
      lookup[char] -= 1
    }
  }
  return true
}
