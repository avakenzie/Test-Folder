const validSentenceChecker = require('./index');

console.log(validSentenceChecker("One lazy dog is too few, 13 is too many."));
//Should return true
console.log(validSentenceChecker("\"The quick brown fox said \"hello Mr lazy dog.\""));
//Should return false
console.log(validSentenceChecker("How many \"lazy dogs\" are there?"));
//Should return true
console.log(validSentenceChecker("Are there 11, 12, or 13 lazy dogs?"));
//Should return false