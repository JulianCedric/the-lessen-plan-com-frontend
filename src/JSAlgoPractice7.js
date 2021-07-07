// 2021.07.07 - WED: 

var str = "loveleetcode";
var char = "e";

function shortestToChar(s,c) {
  let output = [];

  s = s.split("");
  console.log("s:", s);

  console.log("c:", c);

  for (let i=0; i<s.length; i++) {
    if (s[i] === c) {
      output.push(0);
    } else {
      let before = (i-1)
      console.log(before)
      
    }
  }
  console.log("output:", output);

  return output;
};

console.log("Result:", shortestToChar(str, char));