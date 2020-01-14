
// define variables
// Math.floor - rounds down to the nearest integer
// Math.random - picks a number between 0 and 1 not including 1.
// randomNumber = a random number (i.e. 0.6543) multi by 100, plus 1 for range to include 100.
let randomNumber = Math.floor(Math.random() * 100) +1;

// document = HTML document object utlizing DOM
// .querySelector - uses CSS .rule attribute to access specific parts of document object 
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const loworhi = document.querySelector('.loworhi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guess');

let guessCount = 1;
let resetButton;


//declare funtions
function checkGuess(){
    // convert user string input value to integer using Number()
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: '
    }
    // concatenate previous guess with current guess
    guesses.textContent += userGuess + ', ';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        loworhi.textContent = '';
        setGameOver();
    }else if (guessCount === 10){
        lastResult.textContent = 'GAME OVER!!!';
        setGameOver();
    }else{
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = '#cc0000';
        lastResult.style.color = 'white'
        if(userGuess < randomNumber){
            loworhi.textContent = 'Last guess was too low!';
        }else if(userGuess > randomNumber){
            loworhi.textContent = 'Last guess was too high!'
        }
    }

    guessCount++;
    // reset guessField value to nothing
    guessField.value = '';
    // focus - element connected will received keyboard and similar events by default
    guessField.focus();
}

function setGameOver(){
    guessField.disabled = true; // CSS reps disabled element, (can't be activated)
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game?';
    //const container = document.getElementsByTagName('div');
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;

    const result = document.querySelectorAll('.result p')
    for (let i = 0; i < result.length; i++){
        result[i].textContent = ''; //reset all paragraphs in results div
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'lightgrey';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

//Event handling
guessSubmit.addEventListener('click', checkGuess);
