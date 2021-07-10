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

var input = prompt("Please enter a number between 8 and 128 to determine the amount of characters in the password!");

var characters = {
  "all": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
  "upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",//Done
  "lower": "abcdefghijklmnopqrstuvwxyz",//Done
  "number": "0123456789",//Done
  "special": "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
  "upperLower": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",//Done
  "upperNumber": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", //Done
  "upperSpecial": "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
  "upperLowerNumber": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",//Done
  "upperLowerSpecial": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
  "upperNumberSpecial": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
  "lowerNumber": "abcdefghijklmnopqrstuvwxyz0123456789", //Done
  "lowerSpecial": "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
  "lowerNumberSpecial": "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?", //Done
  "numberSpecial": "0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",//Done
};


if (input >= 8 && input <= 128 ) {
  var all = confirm("Would you like to use all characters? (uppercase, lowercase, numbers, symbols");
  if (all === true) {
  alert("You selected all criteria! (uppercase, lowercase, numerical, and special)");
  function generatePassword() {
    var passwordOutput = "";
        var charactersLength = characters.all.length;
        for (var i = 0; i < input; i++) {
          passwordOutput += characters.all.charAt(Math.random() * 
          charactersLength);
        };
        return passwordOutput;
  };
  } else {
  var upper = confirm("Would you like uppercase characters included?");
  if (upper === true) {//upper true
    var lower = confirm("Would you like lowercase characters included?");
    if (lower === true){//lower true
      var number = confirm("Would you like numerical characters included?");
      if (number === true) {//number true
        var special = confirm("Would you like special characters included?");
        if (special === true) {//special true
          alert("You selected all characters.");
          function generatePassword() { //All TTTT
            var passwordOutput = "";
                var charactersLength = characters.all.length;
                for (var i = 0; i < input; i++) {
                  passwordOutput += characters.all.charAt(Math.random() * 
                  charactersLength);
                }
                return passwordOutput;
              }
        } else {//special false
          alert("You selected uppercase, lowercase, and numerical characters!");
          function generatePassword() { //upperLowerNumber TTTF
            var passwordOutput = "";
            var charactersLength = characters.upperLowerNumber.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upperLowerNumber.charAt(Math.random() *
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected uppercase, lowercase, and special characters!");
          function generatePassword() { //upperLowerSpecial TTFT
            var passwordOutput = "";
            var charactersLength = characters.upperLowerSpecial.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upperLowerSpecial.charAt(Math.random() *
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You selected uppercase and lowercase characters!");
          function generatePassword() { //upperLower TTFF
            var passwordOutput = "";
            var charactersLength = characters.upperLower.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upperLower.charAt(Math.random() *
              charactersLength);
            }
            return passwordOutput;
          }
        }
      }
    } else {//lower false
      var number = confirm("Would you like numerical characters included?");
      if (number === true) {
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected uppercase, numerical, and special characters!");
          function generatePassword() { //upperNumberSpecial TFTT
            var passwordOutput = "";
            var charactersLength = characters.upperNumberSpecial.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upperNumberSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You selected uppercase and numerical characters!");
          function generatePassword() { //upperNumber TFTF
            var passwordOutput = "";
            var charactersLength = characters.upperNumber.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upperNumber.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected uppercase and special characters!");
          function generatePassword() { //upperSpecial TFFT
            var passwordOutput = "";
            var charactersLength = characters.upperSpecial.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upperSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You selected uppercase characters!");
          function generatePassword() { //upper TFFF
            var passwordOutput = "";
            var charactersLength = characters.upper.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.upper.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      }
    }
  } else { //upper false
    var lower = confirm("Would you like lowercase characters included?");
    if (lower === true) {//lower true
      var number = confirm("Would you like numerical characters included?");
      if (number === true){//number true
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected lowercase, numerical, and special characters!");
          function generatePassword() { //lowerNumberSpecial FTTT
            var passwordOutput = "";
            var charactersLength = characters.lowerNumberSpecial.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.lowerNumberSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You selected lowercase and numerical characters!");
          function generatePassword() { //lowerNumber FTTF
            var passwordOutput = "";
            var charactersLength = characters.lowerNumber.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.lowerNumber.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected lowercase and special characters!");
          function generatePassword() { //lowerSpecial FTFT
            var passwordOutput = "";
            var charactersLength = characters.lowerSpecial.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.lowerSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You selected lowercase characters!")
          function generatePassword() { //lower FTFF
            var passwordOutput = "";
            var charactersLength = characters.lower.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.lower.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      }
    } else { //lower false
      var number = confirm("Would you like numerical characters included?");
      if (number === true) {//number true
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected numerical and special characters!")
          function generatePassword() { //numberSpecial FFTT
            var passwordOutput = "";
            var charactersLength = characters.numberSpecial.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.numberSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You selected numerical characters!");
          function generatePassword() { //number FFTF
            var passwordOutput = "";
            var charactersLength = characters.number.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.number.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          alert("You selected special characters!");
          function generatePassword() { //special FFFT
            var passwordOutput = "";
            var charactersLength = characters.special.length;
            for (var i = 0; i < input; i++) {
              passwordOutput += characters.special.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          alert("You must select criteria!");
          location.reload();
        }
      }
    }
  }
}
} else if (input < 8 || input > 128) {
  alert("Must be between 8 and 128 characters!");
  location.reload();
} else if (input === null) {
  alert("You must select criteria!");
          location.reload();
}



