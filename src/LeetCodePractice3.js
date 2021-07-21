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
