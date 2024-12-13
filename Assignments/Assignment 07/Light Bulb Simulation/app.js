var userInput;
userInput = + prompt("Please enter 0 or 1")

{
    if (userInput === 1) {
        console.log("The light is on")
    }
    else if (userInput === 0) {
        console.log("The light is off")
    }
    else {
        console.log("Invalid number")
    }
}