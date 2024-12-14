var userInput;
var temp;
userInput = +prompt("Choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius")
temp = +prompt("Enter temperature")

{
    if (userInput === 1) {
        console.log((temp*9/5)+32)
    }
    else if (userInput === 2) {
        console.log((temp-32)*5/9)
    }
    else {
        console.log("Invalid Input")
    }
}