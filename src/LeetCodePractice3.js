// 2021.08.13 - FRI:

var jwls = "aA";
var stns = "aAAbbbb";
var jwls2 = "z";
var stns2 = "ZZ";

function numJewelsInStones(jewels, stones) {
  var output = 0;

  var jewelsArr = jewels.split("");
  console.log("jewelsArr:", jewelsArr);

  var stonesArr = stones.split("");
  console.log("stonesArr:", stonesArr);

  for (let i=0; i<stonesArr.length; i++) {
    if (jewelsArr.indexOf(stonesArr[i]) !== -1) {
      output += 1;
    }
  }

  return output;
}

// console.log("numJewelsInStones(jwls, stns):", numJewelsInStones(jwls, stns));
console.log("numJewelsInStones(jwls, stns):", numJewelsInStones(jwls2, stns2));

//

var arr = [2,3,5,1,3]; 
var extraArr = 3;
var arr2 = [4,2,1,1,2];
var extraArr2 = 1;

function kidsWithCandies(candies, extraCandies) {
  var output = [];

  var candiesCopy = candies.slice();
  var sortedArr = candiesCopy.sort((a,b) => (b-a));
  var highestNum = sortedArr[0];
  var currentBoolVal = false;

  for (let i=0; i<candies.length; i++) {
    if (candies[i] + extraCandies >= highestNum) {
      currentBoolVal = true;
      output.push(currentBoolVal);
    } else if (candies[i] + extraCandies < highestNum) {
      console.log("candies[3]:", candies[3]);
      currentBoolVal = false;
      output.push(currentBoolVal);
    }
  }
  console.log("output:", output);

  return output;
}

// console.log("kidsWithCandies(arr, extraArr):", kidsWithCandies(arr, extraArr));
console.log("kidsWithCandies(arr, extraArr):", kidsWithCandies(arr2, extraArr2));

//

var img = [[1,1,0],[1,0,1],[0,0,0]];
var img2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

function flipAndInvertImage(image) {
  var newImage = [];

  var outerArr = [];
  var innerArr = [];

  for (let i=0; i<image.length; i++) {
      innerArr = image[i].reverse();
      outerArr.push(innerArr);
  }
  console.log("outerArr:", outerArr);

  for (let i=0; i<outerArr.length; i++) {
    for (let j=0; j<outerArr[i].length; j++) {
      if (outerArr[i][j] == 0) {
        outerArr[i][j] = 1;
      } else if (outerArr[i][j] == 1) {
        outerArr[i][j] = 0;
      }
    }
  }
  console.log('outerArr:', outerArr);

  newImage = outerArr;

  return newImage;
}

// console.log("flipAndInvertImage(img):", flipAndInvertImage(img));
console.log("flipAndInvertImage(img):", flipAndInvertImage(img2));

//

var arr = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];
var rK = "color";
var rV = "silver";
var arr2 = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
var rK2 = "type"; 
var rV2 = "phone";

function countMatches(items, ruleKey, ruleValue) {
  var numItems = 0;

  for (let i=0; i<items.length; i++) {
    console.log("Iteration #:", i+1, items[i]);
    
    if (ruleKey == "type") {
      for (let j=0; j<1 ; j++) {
        if (items[i][j] == ruleValue) {
          numItems += 1;
        }
      }
    }
    
    if (ruleKey == "color") {
      for (let j=1; j<2; j++) {
        console.log("j=", items[i][j])
        if (items[i][j] == ruleValue) {
          numItems += 1; 
        }
      }
    }

    if (ruleKey == "name") {
      for (j=2; j<3; j++) {
        if (items[i][j] == ruleValue) {
          numItems += 1;
        }
      }
    }

  }

  return numItems;
};

// console.log("countMatches(arr, rK, rV):", countMatches(arr, rK, rV));
console.log("countMatches(arr2, rK2, rV2):", countMatches(arr2, rK2, rV2));











// 2021.07.21 - WED: 

// Defanged IP Address:

var addr = "1.1.1.1";

function defangIPaddr(address) {
  
    address = address.split("");
    
    let arr = [];
    
    for (let i=0; i<address.length; i++) {
        if (address[i] === ".") {
          address[i] = "[.]";
        }

        arr.push(address[i]);
    }
    console.log("arr:", arr);

    let str = arr.join("");
    console.log("str:", str);

    return str;

};

console.log("Result:", defangIPaddr(addr)); 

// Longest Common Prefix:

var strings = ["flower","flow","flight"];
// var strings = ["dog","racecar","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  for (let comparisonLetter of comparisonWord) {
    console.log("comparisonLetter:", comparisonLetter);
  
    
  
  }


};

console.log("Result:", longestCommonPrefix(strings)); 

//

var strings = ["flower","flow","flight"];
// var strings = ["dog","racecar","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);
    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

  }
  console.log("arr:", arr);

};

console.log("Result:", longestCommonPrefix(strings));  

// 

// var strings = ["flower","flow","flight"];
var strings = ["cir","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);
    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

    if (arr.length > 1) {
      for (let j=0; j<arr.length; j++) {
        if (Math.abs(comparisonWord.indexOf(arr[j]) - comparisonWord.indexOf(arr[j+1]) > 1)) {
          arr.pop();
        }
      }
    }

  }
  console.log("arr:", arr);

  let longest = arr.join("");
  console.log("longest:", longest);

  return longest;

};

console.log("Result:", longestCommonPrefix(strings)); 

//

var strings = ["flower","flow","flight"];
// var strings = ["cir","car"];

function longestCommonPrefix(strs) {

  let comparisonWord = strs[0];

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);
    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

  }

  if (arr.length > 1) {
    for (let j=0; j<arr.length-1; j++) {
      console.log(Math.abs(strs[0].indexOf(arr[j]) - strs[0].indexOf(arr[j+1])));
      if (Math.abs(strs[0].indexOf(arr[j]) - strs[0].indexOf(arr[j+1])) > 1) {
        arr.pop();
      }
    }
  }
  console.log("arr:", arr);

  let longest = arr.join("");
  console.log("longest:", longest);

  return longest;

};

console.log("Result:", longestCommonPrefix(strings)); 

// 

var strings = ["flower","flow","flight"];
// var strings = ["cir","car"];
// var strings = ["flower", "fkow"];

function longestCommonPrefix(strs) {

  let longest = "";

  let comparisonWord = strs[0];

  let firstLetterOfFirstWord = strs[0].charAt(0);
  if (strs[1]) {
    let secondWord = strs[1];
    let firstLetterOfSecondWord = secondWord.charAt(0);

    if (firstLetterOfFirstWord !== firstLetterOfSecondWord) {
      return longest;
    }

  }

  let hash = {};

  let arr = [];

  for (let comparisonLetter of comparisonWord) {
    console.log("ITERATION:", "comparisonLetter:", comparisonLetter);

    hash[comparisonLetter] = 1;
  
    for (let i=1; i<strs.length; i++) {
      if (strs[i].indexOf(comparisonLetter) !== -1) {
        hash[comparisonLetter] += 1;
      }
    }

    if (hash[comparisonLetter] === strs.length) {
      arr.push(comparisonLetter);      
    }

  }

  if (arr.length > 1) {
    for (let j=0; j<arr.length-1; j++) {
      if (Math.abs(strs[0].indexOf(arr[j]) - strs[0].indexOf(arr[j+1])) > 1) {
        arr.pop();
        console.log("arr.pop():", arr.splice(j+1, 1));
      }
    }
  }
  console.log("arr:", arr);

  longest = arr.join("");
  console.log("longest:", longest);

  return longest;

};

console.log("Result:", longestCommonPrefix(strings)); 

// 2021.07.29 - React Practice - new app 
