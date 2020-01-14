let randomNumber = Math.floor(Math.random() * 100) +1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const loworhi = document.querySelector('.loworhi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guess');

let guessCount = 1;
let resetButton;

function guesscheck(){
    alert('placeholder');
}

guesscheck();
// if(guessCount < 11){
//     if(guessField != randomNumber){
//         guessCount += 1;
        //
//     }
// }
