// 2021.07.11 - SUN:

var maximumWealth = function(accounts) {
    
    var arr = [];
    
    for (let i=0; i<accounts.length; i++) {
        var hash = {};
        
        for (let j=0; j<accounts[i].length; j++) {

            
        }
    }
    
};

// Pseudocode: 

    // For loop through each customer's accounts
    // For loop through each amount in each customer's accounts
    // Create array to collect respective sums of each customer's accounts
    // Create hash whose keys represent the ith customer/s, and values initialized to 0
    // Return highest sum

// 

var accts = [[1,2,3],[3,2,1]];

function maximumWealth(accounts) {
    
    var hash = {};
    
    for (let i=0; i<accounts.length; i++) {
      var arr = [];
        for (let j=0; j<accounts[i].length; j++) {
          arr.push(accounts[i][j]);
        }
        hash[i] = arr;
    }
    console.log("hash:", hash);

    
    
};

console.log("Result:", maximumWealth(accts));

// Pseudocode: 

    // For loop through each customer's accounts
    // For loop through each amount in each customer's accounts
    // Create array to collect respective sums of each customer's accounts
    // Create hash whose keys represent the ith customer/s, and values initialized to 0
    // Return highest sum