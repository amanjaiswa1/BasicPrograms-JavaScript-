console.log("\nFive Random Three  Digit Numbers:");

// Generates Three Digit Numbers
let randomOne = Math.floor(Math.random() * 900 + 100);
console.log(randomOne); // Prints Random One

let randomTwo = Math.floor(Math.random() * 900 + 100);
console.log(randomTwo); // Prints Random Two

let randomThree = Math.floor(Math.random() * 900 + 100);
console.log(randomThree); // Prints Random Three

let randomFour = Math.floor(Math.random() * 900 + 100);
console.log(randomFour); // Prints Random Four

let randomFive = Math.floor(Math.random() * 900 + 100);
console.log(randomFive); // Prints Random Five

// Maximum Number
if ((randomOne > randomTwo) && (randomOne > randomThree) && (randomOne > randomFour) && (randomOne > randomFive)) {
    console.log("\nMaximum Number is -> " + randomOne);
}
else {
    if ((randomTwo > randomOne) && (randomTwo > randomThree) && (randomTwo > randomFour) && (randomTwo > randomFive)) {
        console.log("\nMaximum Number is -> " + randomTwo);
    }
    else {
        if ((randomThree > randomOne) && (randomThree > randomTwo) && (randomThree > randomFour) && (randomThree > randomFive)) {
            console.log("\nMaximum Number is -> " + randomThree);
        }
        else {
            if ((randomFour > randomOne) && (randomFour > randomTwo) && (randomFour > randomThree) && (randomFour > randomFive)) {
                console.log("\nMaximum Number is -> " + randomFour);
            }
            else {
                console.log("\nMaximum Number is -> " + randomFive);
            }
        }
    }
}

// Minimum Number
if ((randomOne < randomTwo) && (randomOne < randomThree) && (randomOne < randomFour) && (randomOne < randomFive)) {
    console.log("Minimum Number is -> " + randomOne + "\n");
}
else {
    if ((randomTwo < randomOne) && (randomTwo < randomThree) && (randomTwo < randomFour) && (randomTwo < randomFive)) {
        console.log("Minimum Number is -> " + randomTwo + "\n");
    }
    else {
        if ((randomThree < randomOne) && (randomThree < randomTwo) && (randomThree < randomFour) && (randomThree < randomFive)) {
            console.log("Minimum Number is -> " + randomThree + "\n");
        }
        else {
            if ((randomFour < randomOne) && (randomFour < randomTwo) && (randomFour < randomThree) && (randomFour < randomFive)) {
                console.log("Minimum Number is -> " + randomFour + "\n");
            }
            else {
                console.log("Minimum Number is -> " + randomFive + "\n");
            }
        }
    }
}