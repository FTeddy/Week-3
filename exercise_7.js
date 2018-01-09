function hitungJumlahKata(kalimat) {
  // match at word boundary: not a digit, not a whitespace, not a NOT a word....
  // the matches represent the number of word present regardless of the word length
  // count the length of the matches
    var wordStart = kalimat.match(/\b[^\d\s\W]/g);
    var wordCount = wordStart.length;
    return wordCount;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
