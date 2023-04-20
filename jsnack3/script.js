let arrayNums = [];

for (let i = 0; i < 100; i++) {
    arrayNums.push(Math.floor(Math.random() * 10))
}

let oddNumsSum = 0;

for (let i = 0; i < arrayNums.length; i++) {
    if (i % 2 === 0) {
        oddNumsSum += arrayNums.at(i);
    }
}

console.log(arrayNums);

console.log("SUM OF ODD INDEX NUMS => " + oddNumsSum);
