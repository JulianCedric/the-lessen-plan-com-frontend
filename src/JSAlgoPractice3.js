// 2021.06.30 - WED: 

// Smallest Common Multiple: 

function smallestCommons(arr) {
  
    arr.sort();
    console.log(arr);
  
    let newArr = [];
    let counter = arr[0]
  
    while (counter <= arr[arr.length-1]) {
      newArr.push(counter);
      counter++;
    }
    console.log("newArr:", newArr);
  
    let newArr2 = [];
    let counter2 = 1;
  
    while (counter2 < 20) {
      newArr2.push(newArr[newArr.length-1] * counter2);
      counter2++;
    }
    console.log("newArr2:", newArr2);
  
    let newArr3
  
  }
  
  console.log("Result:", smallestCommons([1,5])); 


// 2021.06.29 - TUE:

// From LeetCode: Best Time to Buy and Sell Stock:

// Take 2:

var prices = [7,1,5,3,6,4];

function maxProfit(arr) {
  console.log("arr:", arr);




};

console.log("Result:", maxProfit(prices));



//

var prices = [7,1,5,3,6,4];

function maxProfit(arr) {

console.log(arr.sort());

let sortedArr = arr.sort();
console.log("sortedArr:", sortedArr);



};

console.log("Result:", maxProfit(prices));

//

var prices = [7,1,5,3,6,4];

function maxProfit(arr) {

  let sortedArr = arr.sort();
  console.log("sortedArr:", sortedArr);

  let maxPrice = sortedArr[sortedArr.length-1];
  console.log("maxPrice:", maxPrice);

  let minPrice = sortedArr[0];
  console.log("minPrice:", minPrice);



};

console.log("Result:", maxProfit(prices));

//

var prices = [7,1,5,3,6,4];

function maxProfit(arr) {

  let arr1 = arr.slice();
  console.log("arr1:", arr1);

  let sortedArr = arr1.sort();
  console.log("sortedArr:", sortedArr);

  let maxPrice = sortedArr[sortedArr.length-1];
  console.log("maxPrice:", maxPrice);

  let minPrice = sortedArr[0];
  console.log("minPrice:", minPrice);

  let maxDay = arr.indexOf(maxPrice);
  console.log("maxDay:", maxDay);

  let minDay = arr.indexOf(minPrice);
  console.log("minDay:", minDay);

  if (minDay > maxDay) {
    maxPrice = sortedArr[sortedArr.length-2];
  }
  console.log("maxPrice:", maxPrice);

  let maxProfit = maxPrice-minPrice;
  console.log("maxProfit:", maxProfit);

  return maxProfit;

};

console.log("Result:", maxProfit(prices));

//



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// drafts for Steamroller algo problem:

function steamrollArray(arr) {

    var newArr = [];
  
    while (arrInDS(arr)) {
      newArr.push(arr);
      // arr = arr.flat();
    }
  
    console.log(arr)
    return arr;
  
  
  }
  
  function arrInDS(ds) {
    return ds.some(dPoint => {
      return Array.isArray(dPoint);  
    })
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  // Binary Agents (from past progress):

  function binaryAgent(str) {
    console.log("str:", str);
  
  
  
  
  }
  
  console.log("Result:", binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// From LeetCode, past progress: 

// Best time to buy and sell stock:

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let buyAtThisPrice = 0;
    let sellAtThisPrice = 0;
    let buyAtThisIndex = 0;
    let sellAtThisIndex = 0;
    
    let pricesClone = prices.slice();
    
    pricesClone.sort((a,b) => a-b);
    console.log(pricesClone.sort((a,b) => a-b));
    
    let maxPrice = Math.max(...prices);
    let minPrice = Math.min(...prices);
    console.log(maxPrice, minPrice);

    console.log("prices:", prices)
    
    for (let i=0; i<prices.length; i++) {

        if (prices[i] === minPrice) {
            buyAtThisPrice += prices[i];
            buyAtThisIndex += i;
        } else if (prices[i] === maxPrice) {
            sellAtThisPrice += prices[i];
            sellAtThisIndex += i;
        }
    }

console.log(buyAtThisPrice);
console.log(sellAtThisPrice);
console.log(buyAtThisIndex);
console.log(sellAtThisIndex);
    
    if (sellAtThisIndex < buyAtThisIndex) {
        prices.splice(sellAtThisIndex, 1);
        var newMax = Math.max(...prices.sort((a,b) => a-b));
        console.log("newMax:", newMax);
    for (let i=0; i<prices.length; i++) {
        if (prices[i])
    }
    } 
 
    return 0;
};


// Map the Debris

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr;
  }
  
  console.log("Result:", orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); 