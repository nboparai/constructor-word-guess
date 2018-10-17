var Letter = function(char) {
    this.char = char.toLowerCase();
    this.isGuessed = false;

    this.show = function () {
        if (this.isGuessed === true) {
            return this.char;
        }
        else {
            return "_";
        }
    } 
    
    this.checkGuess = function(guess) {
        if(guess === this.char) {
            this.isGuessed = true;
        }
        else {
            return false;
        }
    }
}

// module.exports = Letter;