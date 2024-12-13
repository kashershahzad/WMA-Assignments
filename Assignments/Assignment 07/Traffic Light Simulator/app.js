var userInput;
userInput = prompt("Please enter Traffic Colors Red , Yellow or Green")

{
    if (userInput === "Red") {
        console.log("Stop")
    }
    else if (userInput === "Yellow") {
        console.log("Slow Down")
    }
    else if (userInput === "Green") {
        console.log("Go")
    }
    else {
        console.log("Invalid Colors")
    }
}