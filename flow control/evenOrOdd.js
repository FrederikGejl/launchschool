function checkOddEven(number) {
    if (Number.isInteger(number)) { // Check if the number is an integer
        if (number % 2 === 0) {
            console.log(number + " is even.");
        } else {
            console.log(number + " is odd.");
        }
    } else {
        console.log(number + " is not an integer.");
    }
}


checkOddEven(3.14)
checkOddEven(11)
checkOddEven(12)
checkOddEven(1143)
checkOddEven(1144)


