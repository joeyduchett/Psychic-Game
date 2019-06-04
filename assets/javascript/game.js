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
let alphabetStr = 'qwertyuiopasdfghjklzxcvbnm';
let alphabetArr = alphabetStr.split("");
console.log(alphabetArr);
let guessedLetters = [];


