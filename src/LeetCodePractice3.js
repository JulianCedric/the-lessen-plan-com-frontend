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