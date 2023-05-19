function main () {
    userInputNumber = Number(getUserInput());
    for (i = 1; i <= userInputNumber; i++) {
        console.log(fizzBuzzResult(i));
    }
}

function getUserInput() {
    return prompt('Enter any positive integer');
}

function fizzBuzzResult(currentNum) {
    if ((currentNum % 5 == 0) && (currentNum % 3 == 0 )) return 'fizzbuzz';
    if (currentNum % 3 == 0) return 'fizz';
    if (currentNum % 5 == 0) return 'buzz';
    return currentNum;
}