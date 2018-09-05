// Test whether 'apple' is contained at the very beginning of a sentence (string)
var regex = /^apple/;
var sentence_a = "apple is fruit.";
var sentence_b = "an apple a day keeps Dr. away.";
console.log(regex.test(sentence_a)); //true
console.log(regex.test(sentence_b)); //false