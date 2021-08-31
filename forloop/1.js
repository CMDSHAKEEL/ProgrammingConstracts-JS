// Table of power of 2 that are less than or equal to 2^n

const prompt = require('prompt-sync')();

const number = Number(prompt("Enter A Number :"));
//condation in js
for (let index = 0; index <= number; index++) {
    console.log("The Output is : " +Math.pow(2, index));
}