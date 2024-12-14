var userInput;
userInput = +prompt("input 1 for Heads or 0 for Tails")
var randomNumber = Math.floor(Math.random() * 2)

{
    if (userInput === 1 && randomNumber === 1) {
        console.log("Its Heads , you Win")
    }
    else if (userInput === 1 && randomNumber === 0) {
        console.log("Its Tails , you lose")
    }

    else if (userInput === 0 && randomNumber === 0) {
        console.log("Its Tails , you Win")
    }
    else if (userInput === 0 && randomNumber === 1) {
        console.log("Its Heads , you lose")
    }

}