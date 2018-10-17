var Letter = require("./letter.js");

function Word(myWord) {

    this.makeWord = function(myWord) {
        var letterArray = [];

        for (let i = 0; i < myWord.length; i++) {
            var currentLetter = new Letter(myWord[i]);
            letterArray.push(currentLetter);
        }
        return letterArray;
    }

    this.showWord = function () {
        var placeholder = "";
        letterArray.forEach(letter =>{
        placeholder += letter.show() + " ";
        });
        return placeholder;
        }
    
    this.checkLetter = function(input) {
        letterArray.forEach(letter => {
            letter.checkGuess(input);
            
        });

    }
    
}


module.exports = Word;