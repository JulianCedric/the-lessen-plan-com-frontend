// 2021.06.22 - TUE: 

// Roman Numeral Converter

// Starting Code:

function convertToRoman(num) {
    return num;
   }
   
   console.log("Result:", convertToRoman(36));

   // 

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    console.log("num:", num);
  
    let romanNumeral = "";
  
    console.log("romanNumeral:", romanNumeral);
    return romanNumeral;
  
  }
  
  console.log("Result:", convertToRoman(2));

  // passing 2/26 tests:

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    console.log("num:", num);
  
    let romanNumeral = "";
  
    while (num > 0) {
      console.log(num);
      romanNumeral += "I";
      num--;
    } 
  
    console.log("romanNumeral:", romanNumeral);
    return romanNumeral;
  
  }
  
  console.log("Result:", convertToRoman(3));

  // 3 of 26:

  // I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
  
    let romanNumeral = "";
  
    while (num > 0) {
      if (num < 4) {
        // console.log("num:", num);
        romanNumeral += "I";
        num--;
      } else if (num == 4) {
          console.log("num:", num);
          romanNumeral += "IV";
          num -= 4;
      } 
      console.log(num)
    }
  
    console.log("romanNumeral:", romanNumeral);
    return romanNumeral;
  
  }
  
  console.log("Result:", convertToRoman(4));

// *new approach* 

// 2/26

// I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    let arr = [];
    let hash = {};
  
    hash[1] = "I";
    hash[5] = "V";
  
    while (num > 0) {
      if (num <= 3) {
        arr.push(hash[1]);
        num--;
      } else {
        num--;
      }
    }
  
    console.log("hash:", hash);
    console.log("arr:", arr);
    return arr.join('');
  
  }
    
  console.log("Result:", convertToRoman(3)); 

  // 3/26:

  // I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    let arr = [];
    let hash = {};
  
    hash[1] = "I";
    hash[5] = "V";
  
    while (num > 0) {
      if (num <= 3) {
        arr.push(hash[1]);
        num--;
      } else if (num == 4) {
        arr.push(hash[1]);
        arr.push(hash[5]);
        num -= 4;
      } else {
        num--;
      }
    }
  
    console.log("hash:", hash);
    console.log("arr:", arr);
    return arr.join('');
  
  }
    
  console.log("Result:", convertToRoman(4)); 

  // 5/26:

  // I  1
// V  5
// X  10
// L  50
// C  100
// D  500
// M  1000 

function convertToRoman(num) {
    let arr = [];
    let hash = {};
  
    hash[1] = "I";
    hash[5] = "V";
    hash[10] = "X";
  
    while (num > 0) {
      if (num <= 3) {
        arr.push(hash[1]);
        num--;
      } else if (num == 4) {
        arr.push(hash[1]);
        arr.push(hash[5]);
        num -= 4;
      } else if (num == 5) {
        arr.push(hash[5]);
        num -= 5;
      } else if (num > 5 && num < 9) {
        // 6,7,8
        arr.push(hash[5]);
        if (num - 5 == 1) {
          arr.push(hash[1]);
        } else if (num - 5 == 2) {
          arr.push(hash[1]);
          arr.push(hash[1]);
        } else if (num - 5 == 3) {
          arr.push(hash[1]);
          arr.push(hash[1]);
          arr.push(hash[1]);
        }
        num -= num;
      } else if (num == 9) {
        arr.push(hash[1]);
        arr.push(hash[10]);
        num -= num;
      }
      
      else {
        num--;
      }
    }
  
    console.log("hash:", hash);
    console.log("arr:", arr);
    return arr.join('');
  
  }
    
  console.log("Result:", convertToRoman(9)); 

// 2021.06.23 - WED:

