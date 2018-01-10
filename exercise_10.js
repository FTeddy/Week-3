function angkaPalindrome(num) {
  // finding next palindrome
  for (var count = 1; count >= 0; count++){
    var palinCheck = num + count;

    //reverse
    var numString = String(palinCheck);
    var palinOutput = '';
    for (var index=numString.length-1; index>=0; index--){
      palinOutput = palinOutput + numString[index];
    }
    palinOutput = Number(palinOutput);
    //end reverse

    // compare palindrome possibility
    if(palinCheck === palinOutput){
      return palinCheck;
    }
  }



}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
