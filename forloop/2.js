
 //harmonic number

const prompt = require('prompt-sync')();
const number = Number(prompt("Enter a Number :"));

let harmonicNumber = 1;
//appling condation

for (let index = 2; index <= number; index++) {
    harmonicNumber += 1 / index;
}

console.log("Harmonic Number Is :" +harmonicNumber);