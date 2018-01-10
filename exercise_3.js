function konversiMenit(menit) {
  /* output is division result rounded down + : + secondcalc
    secondcalc is the modulus result, then converted into double digit format
  */
  var minuteCount, secondCount, secondCountFormat, output;

  minuteCount = Math.floor(menit/60);
  secondCount = menit % 60;

  // format the minutes into two digit format
  if (secondCount < 10){
    secondCountFormat= '0'+ String(secondCount);
  } else {
      secondCountFormat= String(secondCount);
    }

  // create the time output
  output = minuteCount + ':' + secondCountFormat;
  return output;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
