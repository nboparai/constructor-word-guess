var inquirer = require('inquirer');
// var Letter = require('./letter.js');
var Word = require('./word.js');

// var letterArray = "abcdefghijklmnopqrstuvwxyz";
let word;
let gueesesAllowed;

// List of words to choose from
var wordBank = ["apple", "orange", "grapes", "avocado", "pear", "watermelon", "grapefruit"];

// Pick Random index from AfricanCountries array
function getWord() {
    var randomIndex = Math.floor(Math.random() * wordBank.length);
    var randomWord = wordBank[randomIndex];
    return randomWord;
}

function playGame() {
    var selctedWord = getWord();
    word = new Word(selctedWord);
    word.makeWord();
}

function makeGuesses() {
    let validator = [];

    inquirer.prompt([
        {
            name: "userLetter",
            message: word.showWord() + 
            "\nGuess a letter" +
            "\nNumber of guesses left: " + gueesesAllowed

        }

    ])
    .then(res => {
        word.letters.forEach(letter => {
            letter.checkGuess(data.userLetter);
            validator.push(letter.show())
        });
    if(gueesesAllowed > 0 && validator.indexOf("_") !== -1){
        gueesesAllowed--;

        if(gueesesAllowed === 0) {
            console.log(" Game Over");
            continueGuessing();
        } else {
            makeGuesses();
        }
    } else {
        console.log("You wond");
        console.log(word.showWord());
        playGame();
    }
    });

    fun
}