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