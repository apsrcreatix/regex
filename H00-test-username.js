// validating username of a person 
function usernameTest(person){
    var regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    return regex.test(person);
}

var person = ["apsrcreatix","@ndrodev","$hruti de",".ashish."];

for(var i in person){
    console.log(usernameTest(person[i]));
    console.log(person[i]);
}