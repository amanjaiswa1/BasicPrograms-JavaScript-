console.log("\nFive Random Two  Digit Numbers:");
// Generates Two Digit Number
let randomOne = Math.floor(Math.random() * 90 + 10); 
console.log(randomOne); // Prints Random One

let randomTwo = Math.floor(Math.random() * 90 + 10); 
console.log(randomTwo); // Prints Random Two

let randomThree = Math.floor(Math.random() * 90 + 10); 
console.log(randomThree); // Prints Random Three

let randomFour = Math.floor(Math.random() * 90 + 10); 
console.log(randomFour); // Prints Random Four

let randomFive = Math.floor(Math.random() * 90 + 10);
console.log(randomFive); // Prints Random Five

// Adding All Random Numbers
sum = randomOne + randomTwo + randomThree + randomFour + randomFive;
console.log("\n: Sum : " + sum); // Prints Sum

//Calculating The Average Of Numbers
average = sum / 5;
console.log(": Average : " + average + "\n"); // Prints Average