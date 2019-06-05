// const guessCounter = document.body.querySelector('.guessCounter');
// let guess = parseInt(guessCounter.innerHTML);
// console.log(guessCounter, guess);
// function subtractOne(number){
//      number--
//     guessCounter.innerHTML = number;
//     return number;
// }
// guessCounter.onclick = function() {
//     guess = subtractOne(guess);
//     console.log(guess);
// }


let winCount = 0;
let loseCount = 0;
let guessCounter = 10;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let qwertyStr = 'qwertyuiopasdfghjklzxcvbnm';
let qwertyArr = qwertyStr.split("");
console.log(qwertyArr);
let guessedLetters = [];

function createButtons(qwertyArr){
    for (let i = 0; i < qwertyArr.length; i++){
        let keyBtn = $('<button>');
        let qwerty = qwertyArr[i];
        qwerty = qwerty.toUpperCase();
        console.log(qwerty);
        keyBtn.addClass('keyBtn keyBtn' + qwerty);
        keyBtn.text(qwerty);
        $('.keyboard').append(keyBtn);
        // give button a class, 
        // text content of array at the index CaretPosition, 
        // append buttons to keybaoryod div
    }
}

// function logArr(qwertyArr) {
//     console.log(qwertyArr);

// }

// qwertyArr.keypress(function (e) { 
//     logArr(qwertyArr);
// });

createButtons(qwertyArr);




