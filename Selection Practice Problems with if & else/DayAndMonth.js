const prompt = require("prompt-sync")();

// Store inputs
let dateInput = parseInt(prompt("Enter Date : "));
let monthInput = parseInt(prompt("Enter Month : "));

// Initially setting result as false
result = "False";
checkDayAndMonth(); // Function to check if the Day An Month is in the given range
console.log("Day/Month : " + dateInput + "/" + monthInput + " : " + result);

// Function to check Day & Month
function checkDayAndMonth() {
    if (monthInput >= 3 && monthInput <= 6) {
        dlimit = (30 + (monthInput % 2));
    }
    if (dateInput >= 1 && dateInput <= dlimit) {
        combo = ((monthInput * 100) + dateInput);
    }
    if (combo >= 320 && combo <= 620) {
        return result = "True";
    }
}
