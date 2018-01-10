  function tentukanDeretAritmatika(arr) {

    for (var index = 0; index <= arr.length - 2; index++){
      var deltaA;
      var deltaB;
      if (index === 0){
        deltaA = arr[index+1] - arr[index];
      } else {
        if (index > 0){
          deltaB = arr[index+1] - arr[index];
          if (deltaB !== deltaA){
            return false;
          }
        }
      }
    }
    return true;
  }

  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
