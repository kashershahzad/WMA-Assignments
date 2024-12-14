var userInput;
userInput = +prompt("Enter Your age")

{
    if (userInput >= 18) {
        console.log(" eligible to vote")
    }
   else if (userInput < 18) {
        console.log(" Not eligible to vote")
    }
    else {
        console.log("Invalid Age")
    }
}