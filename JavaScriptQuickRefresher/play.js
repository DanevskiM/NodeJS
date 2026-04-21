var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, useAge, userHasHobby){
    return 'Name is: ' + userName + ', age is: ' + useAge + ' and the user has hobbies: ' + userHasHobby;
}

console.log(summarizeUser(name, age, hasHobbies));