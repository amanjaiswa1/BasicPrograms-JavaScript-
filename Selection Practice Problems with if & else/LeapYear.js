// import method
const readline = require('readline');
const { exit } = require('process');

// IO operation
const readlineIOInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Taking user input
readlineIOInterface.question("\nEnter a year : ", function (year) {
    checkLeapYear(year);
    readlineIOInterface.close;
});


// Function to check leap year
function checkLeapYear(year) {

    // conditions to find out the leap year
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
    exit(0);
}
