// A. 1ft = 12in then 42in = ?ft
console.log("\nA. 1 Foot = 12 Inches");
let feet = 42 / 12; 
console.log("   42 Inches = " + feet + " Feet");

// B. Rectangular Plot of 60 feet x 40 feet in meters
let squareFeet = 60 * 40;
console.log("\nB. Plot 60 Feet x 40 Feet = " + squareFeet + " sq.ft")
let squareMeter = squareFeet * 0.0929;
console.log("   " + squareFeet + " sq.ft = " + squareMeter.toFixed(2) + " sq.m");

// C. Calculate area of 25 such plots in acres
let area = 25 * squareFeet;
console.log("\nC. Area Of 25 Plots Of 60*40 Feet = " + area + " sq.ft")
let acre = area / 43600;
console.log("   " + area + " sq.ft = " + acre.toFixed(2) + " acre\n");