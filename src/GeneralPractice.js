// 2021.08.17 - TUE: 

const sentence = "In West Philadelphia, born and raised";

function getVowelCount(str) {
  var output = 0;

  const splitStr = str.split('');

  const vowelsArr = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const arr = [];

  for (let i=0; i<splitStr.length; i++) {
    if (vowelsArr.indexOf(splitStr[i]) !== -1) {
      arr.push(splitStr[i]);
    }
  }
  console.log(arr.length);

  output = arr.length;

  return output;
}

console.log("getVowelCount(sentence):", getVowelCount(sentence));

//

const fahrenheit = [23,140,212,41];

function getCelsius(arr) {
    const newArr = [];
    
    arr.map(num => {
        newArr.push((num - 32) * (5/9));
    })

    return newArr;
}

console.log("getCelsius(fahrenheit):", getCelsius(fahrenheit));

// (40°F − 32) × 5/9 = 4.444°C

