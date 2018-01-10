  function targetTerdekat(arr) {
    var xIndex = [];
    var oIndex;
    var distanceARR = [];

    for(var index = 0; index <= arr.length-1; index++){
      if(arr[index] == 'o'){
        oIndex = index;
      } else{
        if(arr[index] == 'x'){
          xIndex.push(index);
        }
      }
    }

    // xIndex content check
    if(xIndex[0] === undefined){
      return 0;
    }

    //calculate distance
    for(index = 0; index <= xIndex.length-1; index++){
      var distance
      distance = xIndex[index] - oIndex
      if(distance < 0){
        distance = Math.abs(distance);
      }
      distanceARR.push(distance);
    }

    // sort distanceARR ascending
    distanceARR.sort(function(val1, val2){return val1 > val2});
    return distanceARR[0];
  }

  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
