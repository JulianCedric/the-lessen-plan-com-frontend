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