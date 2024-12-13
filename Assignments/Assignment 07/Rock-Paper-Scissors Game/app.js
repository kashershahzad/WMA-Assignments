var firstPlayer;
var secondPlayer;
userInput = prompt("Input for first player")
userInput = prompt("Input for Second Player")

{
    if (firstPlayer === "rock" && secondPlayer === "scissors") {
        console.log("First player wins")
    }
    else if (firstPlayer === "scissors" && secondPlayer === "rock") {
        console.log("Second player wins")
    }



    else if (firstPlayer === "paper" && secondPlayer === "rock") {
        console.log("First player wins")
    }
    else if (firstPlayer === "rock" && secondPlayer === "paper") {
        console.log("Second player wins")
    }


    else if (firstPlayer === "scissors" && secondPlayer === "paper") {
        console.log("First player wins")
    }
    else if (firstPlayer === "paper" && secondPlayer === "scissors") {
        console.log("Second player wins")
    }
}
