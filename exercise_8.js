function perkalianUnik(arr) {
    var arrayLength = arr.length;
    var output = [];
    // Step from one array item to the next
    for (var index = 0; index <= arrayLength - 1; index++){
        var calculate = 1;
        // step process every array items, ignore current item and calculate
        for (var index2 = 0; index2 <= arrayLength - 1; index2++){
            if (index !== index2){
              calculate = calculate * arr[index2];
            }
        }
        //push into output array after the all calculation process is done
        output.push(calculate);
    }
    return output;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
