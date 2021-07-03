// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//make characters into variable "store"
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//!!!!!!!!!!!!!maybe change to if click on cancel will select all options, OR enter in to select one criteria then change conditional order
var input = prompt("Enter \'all\' to select all characters(recommended). Or enter \'upper\', \'lower\', \'numerical\', or \'special\' to pick one option", "(do not enter quotes)");

if (input === "all") {
  function generatePassword(length) {
  var passwordOutput = "";
  var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?";
  var allCharactersLength = allCharacters.length;
  for (var i = 0; i < allCharactersLength; i++) {
    passwordOutput += allCharacters.charAt(Math.floor(Math.random() * 
    allCharactersLength));
  }
  return passwordOutput
  }
} else if (input === "upper") {
  function generatePassword(length) {
    var passwordOutput = "";
    var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var allCharactersLength = allCharacters.length;
    for (var i = 0; i < allCharactersLength; i++) {
      passwordOutput += allCharacters.charAt(Math.floor(Math.random() * 
      allCharactersLength));
    }
    return passwordOutput
    }
} else if (input === "lower") {
  function generatePassword(length) {
    var passwordOutput = "";
    var allCharacters = "abcdefghijklmnopqrstuvwxyz";
    var allCharactersLength = allCharacters.length;
    for (var i = 0; i < allCharactersLength; i++) {
      passwordOutput += allCharacters.charAt(Math.floor(Math.random() * 
      allCharactersLength));
    }
    return passwordOutput
    }
} else if (input === "numerical") {
  function generatePassword(length) {
    var passwordOutput = "";
    var allCharacters = "0123456789";
    var allCharactersLength = allCharacters.length;
    for (var i = 0; i < allCharactersLength; i++) {
      passwordOutput += allCharacters.charAt(Math.floor(Math.random() * 
      allCharactersLength));
    }
    return passwordOutput
    }
} else (input === "special") 
  function generatePassword(length) {
    var passwordOutput = "";
    var allCharacters = "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?";
    var allCharactersLength = allCharacters.length;
    for (var i = 0; i < allCharactersLength; i++) {
      passwordOutput += allCharacters.charAt(Math.floor(Math.random() * 
      allCharactersLength));
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