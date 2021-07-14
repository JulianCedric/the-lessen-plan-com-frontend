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

//

var accts = [[1,2,3],[3,2,1]];

function maximumWealth(accounts) {
    
    var hash = {};
    
    for (let i=0; i<accounts.length; i++) {
      var total = 0;
        for (let j=0; j<accounts[i].length; j++) {
          total += accounts[i][j];
        }
        hash[i] = total;
    }
    console.log("hash:", hash);
    
    var arr = Object.values(hash);
    console.log("arr:", arr);

    var maxVal = arr[0];

    for (let i=1; i<arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
      console.log("maxVal:", maxVal);
    }

    return maxVal;
    
};

console.log("Result:", maximumWealth(accts));

// Pseudocode: 

    // For loop through each customer's accounts
    // For loop through each amount in each customer's accounts
    // Create array to collect respective sums of each customer's accounts
    // Create hash whose keys represent the ith customer/s, and values initialized to 0
    // Return highest sum
    // ... 

//

var accts = [[1,2,3],[3,2,1]];

function maximumWealth(accounts) {
    
    var hash = {};
    
    for (let i=0; i<accounts.length; i++) {
      var total = 0;
        for (let j=0; j<accounts[i].length; j++) {
          total += accounts[i][j];
        }
        hash[i] = total;
    }
    console.log("hash:", hash);
    
    var arr = Object.values(hash);
    console.log("arr:", arr);

    var maxVal = arr[0];

    for (let i=1; i<arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
      console.log("maxVal:", maxVal);
    }

    return maxVal;
    
};

console.log("Result:", maximumWealth(accts));

// Pseudocode: 

    // For loop through each customer's accounts
    // For loop through each amount in each customer's accounts
    // Create hash whose keys represent the ith customer/s, and values are totals of each account
    // Determine highest sum, assigned to maxVal
    // Return maxVal

// 2021.07.14 - WED: Sliding Window

var array = [100,200,300,400,500];
var num = 3;

// The Sliding Window technique helps us find the max/min by first creating a variable to store some value, which we then compare to another value. 
function slidingWindow(arr, k) {
  
  let sum = 0;
  let max = 0;

  for (let i=0; i<k; i++) {
    sum += arr[i];
  }
  console.log("sum:", sum);

  for (let i=k; i<arr.length; i++) {
    sum += arr[i] - arr[i-k];
    console.log("sum2=" + sum, "i=" + i, "i-k=" + (i-k));
  }


}

console.log("Result:", slidingWindow(array, num));