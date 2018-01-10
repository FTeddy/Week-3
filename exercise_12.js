function tentukanDeretGeometri(arr) {
  // start a looop, first loop determines the the multiplication value
  // second loop onwards compare the multiplication value
  for (var index = 0; index <= arr.length -2; index++){
    var modulus;
    var divisionA;
    var divisionB;

    // first loop
    if (index === 0){
      modulus = arr[index+1] % arr[index];
      if (modulus !== 0){
        return false;
      } else {
        divisionA = arr[index+1] / arr[index];
      }
    }

    // second loop onwards
    if (index > 0){
      divisionB = arr[index+1] / arr[index];
      if (divisionB !== divisionA){
        return false;
      }
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
