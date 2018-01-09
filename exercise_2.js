function balikKata(kata) {
  // you can only write your code here!
  var output = '';
  for (var index=kata.length-1; index>=0; index--){
    output = output + kata[index];
  }
  return output;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
