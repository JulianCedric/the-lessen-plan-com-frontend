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

function rot13(str) {
  let strArr = str.split('');
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = letters.split('');

  let arr = [];
  let newArr = [];
  let newerArr = [];

  for (let i=0; i<strArr.length; i++) {
    if (alphabet.indexOf(strArr[i]) !== -1) {
      arr.push(alphabet.indexOf(strArr[i]) + 13);
    } else {
      arr.push(" ")
    }
  }
  console.log("arr:", arr);

  for (let i=0; i<arr.length; i++) {
    if (arr[i] >= 26) {
      newArr.push(arr[i] - 26);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log("newArr:", newArr);

  for (let i=0; i<newArr.length; i++) {
    newerArr.push(alphabet[newArr[i]]);
  }
  console.log("newerArr:", newerArr);

  

}

// function converter(letter) {

// }

console.log("Result:", rot13("SERR PBQR PNZC"));

// 1/3

function rot13(str) {
  let strArr = str.split('');
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = letters.split('');

  let arr = [];
  let newArr = [];
  let newerArr = [];

  for (let i=0; i<strArr.length; i++) {
    if (alphabet.indexOf(strArr[i]) !== -1) {
      arr.push(alphabet.indexOf(strArr[i]) + 13);
    } else {
      arr.push(" ")
    }
  }
  // console.log("arr:", arr);

  for (let i=0; i<arr.length; i++) {
    if (arr[i] >= 26) {
      newArr.push(arr[i] - 26);
    } else {
      newArr.push(arr[i]);
    }
  }
  // console.log("newArr:", newArr);

  for (let i=0; i<newArr.length; i++) {
    newerArr.push(alphabet[newArr[i]]);
  }

  for (let i=0; i<newerArr.length; i++) {
    if (newerArr[i] === undefined) {
      newerArr[i] = " ";
    }
  }

  let result = newerArr.join('');
  return result;

}

console.log("Result:", rot13("SERR PBQR PNZC")); 

// 3/3! 

function rot13(str) {
  let strArr = str.split('');
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = letters.split('');

  let arr = [];
  let newArr = [];
  let newerArr = [];

  for (let i=0; i<strArr.length; i++) {
    if (alphabet.indexOf(strArr[i]) !== -1) {
      arr.push(alphabet.indexOf(strArr[i]) + 13);
    } else if (strArr[i] === "!" || strArr[i] === "?" || strArr[i] === ".") {
      arr.push(strArr[i])
    } else {
      arr.push(" ")
    }
  }
  // console.log("arr:", arr); 

  for (let i=0; i<arr.length; i++) {
    if (arr[i] >= 26) {
      newArr.push(arr[i] - 26);
    } else {
      newArr.push(arr[i]);
    }
  }
  // console.log("newArr:", newArr);

  for (let i=0; i<newArr.length; i++) {
    if (newArr[i] === "!" || newArr[i] === "?" || newArr[i] === ".") {
      newerArr.push(newArr[i]);
    } else {
      newerArr.push(alphabet[newArr[i]]);
    }
  }
  console.log("newerArr:", newerArr);

  for (let i=0; i<newerArr.length; i++) {
    if (newerArr[i] === undefined) {
      newerArr[i] = " ";
    }
  }

  let result = newerArr.join('');
  return result;

}

// console.log("Result:", rot13("SERR PBQR PNZC")); 
console.log("Result:", rot13("SERR CVMMN!"));

// 2021.06.24 - THU:

// Telephone Number Validator

// Starting Code: 

function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");

// 28 tests in total

function telephoneCheck(str) {





}

console.log("Result:", telephoneCheck("555-555-5555"));

//

// check if the str contains only numbers (and dashes, parentheses)

function telephoneCheck(str) {
  console.log("str:", str);

  


}

console.log("Result:", telephoneCheck("555-555-5555"));

//

// check if the str contains only numbers (and dashes, parentheses)

function telephoneCheck(str) {
  console.log("str:", str);

  let arr = str.split('');
  console.log("arr:", arr);

}

console.log("Result:", telephoneCheck("555-555-5555"));
// console.log("Result:", telephoneCheck("(555)555-5555"));
// console.log("Result:", telephoneCheck("(555) 555-5555"));
// console.log("Result:", telephoneCheck("555 555 5555"));
// console.log("Result:", telephoneCheck("5555555555"));
// console.log("Result:", telephoneCheck("1 555 555 5555"));