var userInput;
userInput =+ prompt("Input Temperature")

{
    if (userInput <= 0) {
        console.log("Freezing")
    }
    else if (userInput > 0 && userInput <= 15) {
        console.log("COld")
    }
    else if (userInput > 15 && userInput <= 30) {
        console.log("Warm")
    }
    else if (userInput > 30) {
        console.log("Hot")
    }
    else {
        console.log("Invalid Temperature")
    }
}

console.log("helo")