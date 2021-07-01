// 2021.07.01 - THU:

//

var flattenedArr = [];

function steamrollArray(arr) {
  console.log("arr:", arr);

  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = steamrollArray(arr[i]);
    } else {
      flattenedArr.push(arr[i])
    }
  }

  console.log("flattenedArr:", flattenedArr);
  return flattenedArr;


}

console.log("Result:", steamrollArray([1, [2], [3, [[4]]]]));

// 

function steamrollArray(arr) {
    console.log("arr:", arr);
  
    console.log("arr[0]:", arr[0]);
    console.log("arr[1]:", arr[1]);
    console.log("arr[2]:", arr[2]);  
  
  
  
  
  }
  
  console.log("Result:", steamrollArray([1, [2], [3, [[4]]]]));

// Steamroller - Flatten a Nested Array algo problem:

function steamrollArray(arr) {

    while (arrInDS(arr)) {
      arr = arr.flat();
    }
  
    return arr;
  
  
  }
  
  function arrInDS(ds) {
    return ds.some(dPoint => {
      return Array.isArray(dPoint);  
    })
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
















// Refactoring 'Smallest Common Multiple' Algo Problem:

function smallestCommons(arr) {

    let sortedArr = arr.sort((a,b) => a-b);
    console.log("sortedArr:", sortedArr);
  
    let lowerNum = sortedArr[0];
    let higherNum = sortedArr[1];
    // console.log(lowerNum, higherNum);
  
    let range = rangeMaker(lowerNum, higherNum);
    let multiple = 1;
  
    for (let i=0; i<range.length; i++) {
      
    }
  
  }
  
  function rangeMaker(lowerNumber, higherNumber) {
    let arr = [];
    let counter = lowerNumber;
  
    while (counter <= higherNumber) {
      arr.push(counter);
      counter += 1;
    }
    console.log("arr:", arr);
    return arr;
  }
  
  console.log("Result:", smallestCommons([1,5]));