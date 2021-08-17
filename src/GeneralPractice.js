// 2021.08.17 - TUE: 

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