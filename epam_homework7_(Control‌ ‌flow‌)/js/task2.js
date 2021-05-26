let answer = confirm("Do you want play a game?");

if (answer === false) {
    alert("You did not become a millionaire, but can")
}

let attempts = 3;
let maxPrize = 10;
let totalPrize = 0;
let max = 5;

min = Math.ceil(1);
max = Math.floor(max);
let randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber);

while (answer && attempts >= 1) {

    let putNumber = +prompt(`
    Enter a number from 0 to ${max}
    Attempts left: ${attempts}
    Total prize: ${totalPrize}$
    Possible prize on curren attempt: ${maxPrize}$`)
    if (putNumber === randomNumber) {
        randomNumber = Math.floor(Math.random() * (max * 2 - min)) + min;
        answer = confirm(`Congratulation, you prize is ${maxPrize + totalPrize} $, Do you want continue?`);
        console.log(randomNumber);
        totalPrize += maxPrize;
        attempts = 4;
        maxPrize = 60;
        max = 10;
    }
    attempts--;
    maxPrize = Math.floor(maxPrize / 2);
    if (attempts === 0) {
        answer = confirm("You prize is 0$. Do you want play again?");
        totalPrize = 0;
        attempts = 3;
        maxPrize = 10;
        max = 5;
    }
    if (putNumber === 0) {
        alert("Thanks for a game. Bye!!!")
        break;
    }
}