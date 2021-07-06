// 2021.07.06 - TUE:

//

// add up total in cash register before transaction is made

function checkCashRegister(price, cash, cid) {

    console.log("price:", price);
    console.log("cash:", cash);
    console.log("cid:\n ", cid);
    
  
  
  
  }
  
  console.log("Result:", checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 

// Roman Numeral Converter

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
  
}
  
console.log("Result:", convertToRoman(9)); 

// 
// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    const map = {
      M:  1000,
      CM: 900,
      D:  500,
      CD: 400,
      C:  100,
      XC: 90,
      L:  50,
      XL: 40,
      X:  10,
      IX: 9,
      V:  5,
      IV: 4,
      I:  1,
    };
    let result = '';
    
    // main algorithm
    
    console.log("result:", result);
    return result;
  };
  
console.log("Result:", convertToRoman(9)); 

//

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    const map = {
      M:  1000,
      CM: 900,
      D:  500,
      CD: 400,
      C:  100,
      XC: 90,
      L:  50,
      XL: 40,
      X:  10,
      IX: 9,
      V:  5,
      IV: 4,
      I:  1,
    };
    let result = '';
    

  for (let key in map) {  
    const repeatCounter = Math.floor(num / map[key]);
    
    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }
    
    num %= map[key];
    
    if (num === 0) return result;
  }
    
    console.log("result:", result);
    return result;
  };
  
console.log("Result:", convertToRoman(9)); 