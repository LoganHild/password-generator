// Assignment Code
var generateBtn = document.querySelector("#generate");
// Don't touch this variable
// Write password to the #password input
function writePassword() { // Don't touch this function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//make characters into variable "store"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //Don't touch this event listener!
//!!!!!!!!!!!!!maybe change to if click on cancel will select all options, OR enter in to select one criteria then change conditional order
var input = prompt("Enter \'all\' to select all characters(recommended). Or enter \'upper\', \'lower\', \'numerical\', or \'special\' to pick one option", "(do not enter quotes)");

var criteria = {
  all: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numerical: "0123456789",
  special: "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  
};



if (input === "all") {
  function generatePassword(length) {
  var passwordOutput = "";
  var allCharactersLength = criteria.all.length;
  for (var i = 0; i < allCharactersLength; i++) {
    passwordOutput += criteria.all.charAt(Math.floor(Math.random() * 
    allCharactersLength));
  }
  return passwordOutput
  }
} else if (input === "upper") {
  function generatePassword(length) {
    var passwordOutput = "";
    var uppercaseLength = criteria.upper.length;
    for (var i = 0; i < uppercaseLength; i++) {
      passwordOutput += criteria.upper.charAt(Math.floor(Math.random() * 
      uppercaseLength));
    }
    return passwordOutput
    }
} else if (input === "lower") {
  function generatePassword(length) {
    var passwordOutput = "";
    var lowercaseLength = criteria.lower.length;
    for (var i = 0; i < lowercaseLength; i++) {
      passwordOutput += criteria.lower.charAt(Math.floor(Math.random() * 
      lowercaseLength));
    }
    return passwordOutput
    }
} else if (input === "numerical") {
  function generatePassword(length) {
    var passwordOutput = "";
    var numericalLength = criteria.numerical.length;
    for (var i = 0; i < numericalLength; i++) {
      passwordOutput += criteria.numerical.charAt(Math.floor(Math.random() * 
      numericalLength));
    }
    return passwordOutput
    }
} else (input === "special") 
  function generatePassword(length) {
    var passwordOutput = "";
    var specialCharactersLength = criteria.special.length;
    for (var i = 0; i < specialCharactersLength; i++) {
      passwordOutput += criteria.special.charAt(Math.floor(Math.random() * 
      specialCharactersLength));
    }
    return passwordOutput
  }


//need to use conditional for what they select, how will I tie them together?
//How am I going to make a prompt for adding the amount of characters needed?



/*need to make prompts for selecting length(at least 8, no more than 128)
as well as asked for character types- lowercase, uppercase, numeric, and/or special characters*/
//series of prompts? Would be easier to have it selected on HTML need to research this!
//when prompts are answered it should be validated with at least one character type selected
//Once prompts are answered, password should be generated to match criteria
//password displayed as alert or written on