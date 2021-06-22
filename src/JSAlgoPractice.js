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