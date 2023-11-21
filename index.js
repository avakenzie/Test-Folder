module.exports = validSentenceChecker;

function spellWords(number) {
    const numMap = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];
    return numMap[number];
}

function validSentenceChecker(input){

    //String starts with a capital letter.
    if (input[0] !== input[0].toUpperCase()){
        return false;
    }

    //String has an even number of quotation marks.
    if ((input.match(/"/g) || []).length % 2 !==0){
        return false;
    }

    //String ends with one of the following sentence termination characters: ".", "?", "!"
    const lastChar = input[input.length - 1];
    if (lastChar !== '.' && lastChar !== '?' && lastChar !== '!'){
        return false;
    }

    //String has no period characters other than the last character.
    if (input.indexOf('.') !== input.lastIndexOf('.')){
        return false;
    }

    //Numbers below 13 are spelled out ("one”, "two”, "three”, etc…).
    const words = input.split(/\s+|[,.!?]/);
    for (const word of words) {
        if (!isNaN(word) && parseInt(word) < 13) {
            const spelledNum = spellWords(parseInt(word));
            if (word.toLowerCase() !== spelledNum.toLowerCase()){
                return false;
            }
        }
    }

    return true;    //Will only return true if passes all rules 
}