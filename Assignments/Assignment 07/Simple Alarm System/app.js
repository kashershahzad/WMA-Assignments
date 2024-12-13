var userInput;
var userInput2;
userInput = prompt("Is the door open?")
userInput2 = prompt("Is motion detected?")

{
    if (userInput === "yes") {
        if (userInput2 === "yes") {
            console.log("Alarm Triggered")
        }
    }


    else if (userInput === "no") {
        if (userInput2 === "no") {
            console.log("All Safe")
        }
    }

}