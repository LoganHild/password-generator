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

var all = confirm("Would you like to use all characters? (uppercase, lowercase, numbers, symbols")

// var characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?"]
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

if (all === true) {
  function generatePassword() {
    var passwordOutput = "";
        var charactersLength = characters.all.length;
        for (var i = 0; i < charactersLength; i++) {
          passwordOutput += characters.all.charAt(Math.random() * 
          charactersLength);
        }
        return passwordOutput
  }
} else {
  var upper = confirm("Would you like uppercase characters included?");
  if (upper === true) {//upper true
    var lower = confirm("Would you like lowercase characters included?");
    if (lower === true){//lower true
      var number = confirm("Would you like numerical characters included?");
      if (number === true) {//number true
        var special = confirm("Would you like special characters included?");
        if (special === true) {//special true
          function generatePassword() { //All TTTT
            var passwordOutput = "";
                var charactersLength = characters.all.length;
                for (var i = 0; i < charactersLength; i++) {
                  passwordOutput += characters.all.charAt(Math.random() * 
                  charactersLength);
                }
                return passwordOutput;
              }
        } else {//special false
          function generatePassword() { //upperLowerNumber TTTF
            var passwordOutput = "";
            var charactersLength = characters.upperLowerNumber.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.upperLowerNumber.charAt(Math.random() *
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          function generatePassword() { //upperLowerSpecial TTFT
            var passwordOutput = "";
            var charactersLength = characters.upperLowerSpecial.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.upperLowerSpecial.charAt(Math.random() *
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          function generatePassword() { //upperLower TTFF
            var passwordOutput = "";
            var charactersLength = characters.upperLower.length;
            for (var i = 0; i < charactersLength; i++) {
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
          function generatePassword() { //upperNumberSpecial TFTT
            var passwordOutput = "";
            var charactersLength = characters.upperNumberSpecial.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.upperNumberSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          function generatePassword() { //upperNumber TFTF
            var passwordOutput = "";
            var charactersLength = characters.upperNumber.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.upperNumber.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          function generatePassword() { //upperSpecial TFFT
            var passwordOutput = "";
            var charactersLength = characters.upperSpecial.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.upperSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          function generatePassword() { //upper TFFF
            var passwordOutput = "";
            var charactersLength = characters.upper.length;
            for (var i = 0; i < charactersLength; i++) {
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
          function generatePassword() { //lowerNumberSpecial FTTT
            var passwordOutput = "";
            var charactersLength = characters.lowerNumberSpecial.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.lowerNumberSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          function generatePassword() { //lowerNumber FTTF
            var passwordOutput = "";
            var charactersLength = characters.lowerNumber.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.lowerNumber.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          function generatePassword() { //lowerSpecial FTFT
            var passwordOutput = "";
            var charactersLength = characters.lowerSpecial.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.lowerSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          function generatePassword() { //lower FTFF
            var passwordOutput = "";
            var charactersLength = characters.lower.length;
            for (var i = 0; i < charactersLength; i++) {
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
          function generatePassword() { //numberSpecial FFTT
            var passwordOutput = "";
            var charactersLength = characters.numberSpecial.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.numberSpecial.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        } else {
          function generatePassword() { //number FFTF
            var passwordOutput = "";
            var charactersLength = characters.number.length;
            for (var i = 0; i < charactersLength; i++) {
              passwordOutput += characters.number.charAt(Math.random() * 
              charactersLength);
            }
            return passwordOutput;
          }
        }
      } else {//number false
        var special = confirm("Would you like special characters included?");
        if (special === true) {
          function generatePassword() { //special FFFT
            var passwordOutput = "";
            var charactersLength = characters.special.length;
            for (var i = 0; i < charactersLength; i++) {
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




















// var criteria = {
//   "a": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
//   "u": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   "l": "abcdefghijklmnopqrstuvwxyz",
//   "n": "0123456789",
//   "s": "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
//   "ul": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
//   "un": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//   "us": "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
//   "ln": "abcdefghijklmnopqrstuvwxyz0123456789",
//   "ls": "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
//   "ns": "0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?"
// };


// function generatePassword() {
//   if (input === "u") {
  
//     var passwordOutput = "";
//     var uppercaseLength = criteria.u.length;
//     for (var i = 0; i < uppercaseLength; i++) {
//       passwordOutput += criteria.u.charAt(Math.random() * 
//       uppercaseLength);
//     }
//     return passwordOutput
  
//   } else if (input === "l") {
  
//     var passwordOutput = "";
//     var lowercaseLength = criteria.l.length;
//     for (var i = 0; i < lowercaseLength; i++) {
//       passwordOutput += criteria.l.charAt(Math.random() * 
//       lowercaseLength);
//     }
//     return passwordOutput
    
//   } else if (input === "n") {
  
//     var passwordOutput = "";
//     var numericalLength = criteria.n.length;
//     for (var i = 0; i < numericalLength; i++) {
//       passwordOutput += criteria.n.charAt(Math.random() * 
//       numericalLength);
//     }
//     return passwordOutput
    
//   } else if (input === "s") {

//     var passwordOutput = "";
//     var specialCharactersLength = criteria.s.length;
//     for (var i = 0; i < specialCharactersLength; i++) {
//       passwordOutput += criteria.s.charAt(Math.random() * 
//       specialCharactersLength);
//     }
//     return passwordOutput
    
//   } else if (input === "ul") {
//     var passwordOutput = "";
//     var specialCharactersLength = criteria.ul.length;
//     for (var i = 0; i < specialCharactersLength; i++) {
//       passwordOutput += criteria.ul.charAt(Math.random() * 
//       specialCharactersLength);
//     }
//     return passwordOutput
//   // } else if (input === "")
//    } else if (input === "a") {
//     var passwordOutput = "";
//     var allCharactersLength = criteria.a.length;
//     for (var i = 0; i < allCharactersLength; i++) {
//       passwordOutput += criteria.a.charAt(Math.random() * 
//       allCharactersLength);
//     }
//     return passwordOutput
//   }
  

// }
//need to use conditional for what they select, how will I tie them together?
//How am I going to make a prompt for adding the amount of characters needed?



/*need to make prompts for selecting length(at least 8, no more than 128)
as well as asked for character types- lowercase, uppercase, numeric, and/or special characters*/
//series of prompts? Would be easier to have it selected on HTML need to research this!
//when prompts are answered it should be validated with at least one character type selected
//Once prompts are answered, password should be generated to match criteria
// password displayed as alert or written