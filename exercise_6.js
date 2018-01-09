function palindrome(kata) {
  // reverse word, then compare result and input

  var output = '';
  for (var index= kata.length-1; index>=0 ; index--){
    output = output + kata[index];
  }
  if (kata == output){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
