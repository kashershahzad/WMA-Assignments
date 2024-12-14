var firstNumber = Math.floor(Math.random() * 100);
var secondNumber = Math.floor(Math.random() * 100);
const operator = [(firstNumber, secondNumber) => firstNumber + secondNumber,
(firstNumber, secondNumber) => firstNumber - secondNumber,
(firstNumber, secondNumber) => firstNumber * secondNumber,
(firstNumber, secondNumber) => firstNumber / secondNumber,]

const randomIndex = Math.floor(Math.random() * operator.length);



var result = firstNumber + secondNumber


userInput = +prompt(`${firstNumber} + ${secondNumber}`)

{
    if (userInput === result) {
        console.log("Answere is true")
    }
    else {
        console.log("Answere is false")
    }
}