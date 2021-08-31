const prompt = require('prompt-sync')();

const number = prompt("Enter a number ");

let index = 0;
/*
 Using Whlie -Loop
*/
while (index <= number && Math.pow(2, index) <= 256) {
    console.log(`2 ^ ${index} = ${Math.pow(2, index)}`);
    index++;
} 