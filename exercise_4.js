function xo(str) {
  // searxh for x, count x
  // search for o, count o
  // compare the x and o count, return true if same and false when not
  var xLength, oLength;
  xLength = (str.match(/x/g)).length;
  oLength = (str.match(/o/g)).length;

  if (xLength == oLength){
    return true;
  }
  else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
