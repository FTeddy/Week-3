function pasanganTerbesar(num) {
  // set input as string and process them into pairs using loop
  // push the pairs into output as a number
  // after looping is done sort the results using sorting function
  // return results
    var pairs = [];
    num = String(num);
    for (var index = 0; index <= num.length - 2; index++){
      var pairing = num[index] + num[index + 1];
      pairs.push(parseInt(pairing));
    }
    pairs.sort(function(val1,val2){ return val1 < val2 });
    return pairs[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
