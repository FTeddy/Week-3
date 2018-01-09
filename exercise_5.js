function perpangkatanDua(str) {
  // exponent is a result of a 2 pow [number]
  // [number] keeps increasing via loop starting from 0
  // if exponent is equal to str, then return number
  // if exponent exceed str then return -1
  // in case str is below 0, return 0

  for(var number = 0; number >= 0; number++){
    var exponent;
    exponent = Math.pow(2, number);
    if (str < exponent){
      return -1;
    }
    else {
      if (str < 0){
        return -1;
      }
    else {
      if (str == exponent){
        return number;
      }
    }
    }
  }
}

// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0
