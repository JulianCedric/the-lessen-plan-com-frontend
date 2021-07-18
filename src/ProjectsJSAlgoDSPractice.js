// 2021.07.18 - SUN:

// Palindrome Checker (Project: 1 of 5)

function palindrome(str) {
    let newStr = str.toLowerCase().replace(/[^a-z\d]/g, '');
    return newStr.split('').reverse().join('') === newStr;
  }
  
  console.log(palindrome("_eye"));
  
  // Code below this line is from a previous attempt at solving Palidrome Checker w/o Regex:
  
  // function palindrome(str) {
  
  //   let str = str.split('');
  //   // console.log("str:", str);
  
  //   str = str.map(elem => {
  //     return elem.toLowerCase();
  //   });
  //   // console.log("str:", str);
  
  //   for (let i=0; i<str.length; i++) {
  //     if (str[i] === " " || str[i] === "_" || str[i] === "," || str[i] === "." || str[i] === "-" || str[i] === ":") {
  //       str.splice(i, 1);
  //       str.length - 1;
  //     }
  //   }
  
  //   let newStr = str.join('');
  //   let reversedStrArr = str.reverse();
  //   let reversedStr = reversedStrArr.join('');
  
  //   let newStrArr = newStr.split(' ');
  //   newStr = newStrArr.join('');
  
  //   let newReversedStrArr = reversedStr.split(' ');
  //   reversedStr = newReversedStrArr.join('');
    
  //   if (newStr == reversedStr) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  console.log("Result:", palindrome("0_0 (: /-\ :) 0-0"));
  // console.log("Result:", palindrome("A man, a plan, a canal. Panama")); 
  // console.log("Result:", palindrome("My age is 0, 0 si ega ym."));
  // console.log("Result:", palindrome("_eye"));
  // console.log("Result:", palindrome("race car"));
  // console.log("Result:", palindrome("never odd or even"));



// Roman Numeral Converter (Project: 2 of 5)

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
  
// console.log("Result:", convertToRoman(9));
// console.log("Result:", convertToRoman(649));
// console.log("Result:", convertToRoman(789));
// console.log("Result:", convertToRoman(2014));
console.log("Result:", convertToRoman(3999));
