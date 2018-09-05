// validating username of a person 
function usernameTest(person){
    // ^ : for first character
    // [A-za-z0-9] : first should be among these them 
    // + : matches the preceding item given above one or more time
    // (?:) : non capturing group
    // $ : ending
    var regex = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/;
    return regex.test(person);
}

var person = [
    "apsrcreatix",
    "@ndrodev",
    "$hruti de",
    ".ashish.",
    "HEYDUDE",
    "SINGis%ing"
];

for(var ith in person){
    console.log(person[ith] + " : " + usernameTest(person[ith]));
}