// 2021.06.29 - TUE:

// drafts for Steamroller algo problem:

function steamrollArray(arr) {

    var newArr = [];
  
    while (arrInDS(arr)) {
      newArr.push(arr);
      // arr = arr.flat();
    }
  
    console.log(arr)
    return arr;
  
  
  }
  
  function arrInDS(ds) {
    return ds.some(dPoint => {
      return Array.isArray(dPoint);  
    })
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  // Binary Agents (from past progress):

  function binaryAgent(str) {
    console.log("str:", str);
  
  
  
  
  }
  
  console.log("Result:", binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));