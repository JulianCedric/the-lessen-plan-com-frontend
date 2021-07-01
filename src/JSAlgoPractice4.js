// 2021.07.01 - THU:


















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