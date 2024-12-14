var Passward;
Passward = prompt("Enter Password")

var length = Passward.length;

{
    if (length >= 8) {
        console.log("Strong Password")
    }
    else if (length > 5 && length <= 7) {
        console.log("Moderate Password")
    }
    else if (length < 5) {
        console.log("Weak Password")
    }

}
