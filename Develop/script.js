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
// var input = prompt("Enter Criteria- \"u\"=upper, \"l\"=lower, \"n\"=number, \"s\"=special, \"ul\"=upper & lower, \"un\"=upper & number, \"us\"=upper & special, \"ln\"=lower & number, \"ls\"=lower & special, \"ns\"=number & special, \"a\" = all","(do not enter quotes)");

var all = confirm("Would you like to use all characters? (uppercase, lowercase, numbers, symbols")
var upper = confirm("Would you like uppercase characters included?");
var lower = confirm("Would you like lowercase characters included?");
var number = confirm("Would you like number characters included?");
var special = confirm("Would you like special characters included?");


var characters = {
  "all": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "upper": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lower": "abcdefghijklmnopqrstuvwxyz",
  "numerical": "0123456789",
  "special": "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "upperLower": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  "upperNumber": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  "upperSpecial": "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "upperLN": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  "upperLS": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "upperNS": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "lowerNumber": "abcdefghijklmnopqrstuvwxyz0123456789",
  "lowerSpecial": "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "lowerNS": "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
  "numberSpecial": "0123456789!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?",
};

function generatePassword() {
  if (all === true) {    //all, TTTT
    var passwordOutput = "";
    var charactersLength = characters.all.length;
    for (var i = 0; i < charactersLength; i++) {
      passwordOutput += characters.all.charAt(Math.random() * 
      charactersLength);
    }
    return passwordOutput
  } else if (all !== true) { //for false input
    if (upper === true && lower === false && numerical === false && special === false) {
      var passwordOutput = "";   //upper, TFFF
      var charactersLength = characters.upper.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upper.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === false && lower === true && numerical === false && special === false) {
      var passwordOutput = "";   //lower, FTFF
      var charactersLength = characters.lower.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.lower.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper !== true && lower !== true && numerical === true && special !== true) {
      var passwordOutput = "";   //numerical, FFTF
      var charactersLength = characters.numerical.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.numerical.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper !== true && lower !== true && numerical !== true && special === true) {
      var passwordOutput = "";   //special, FFFT
      var charactersLength = characters.special.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.special.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === true && lower === true && numerical !== true && special !== true) {
      var passwordOutput = "";  //upperLower, TTFF
      var charactersLength = characters.upperLower.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upperLower.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === true && lower !== true && numerical === true && special !== true) {
      var passwordOutput = "";  //upperNumber, TFTF
      var charactersLength = characters.upperNumber.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upperNumber.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === true && lower !== true && numerical !== true && special === true) {
      var passwordOutput = ""; //upperSpecial, TFFT
      var charactersLength = characters.upperSpecial.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upperSpecial.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === true && lower === true && numerical === true && special !== true) {
      var passwordOutput = ""; //upperLN, TTTF
      var charactersLength = characters.upperLN.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upperLN.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === true && lower === true && numerical !== true && special === true) {
      var passwordOutput = ""; //upperLS, TTFT
      var charactersLength = characters.upperLS.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upperLS.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper === true && lower !== true && numerical === true && special === true) {
      var passwordOutput = ""; //upperNS, TFTT
      var charactersLength = characters.upperNS.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.upperNS.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper !== true && lower === true && numerical === true && special !== true) {
      var passwordOutput = ""; //lowerNumber, FTTF
      var charactersLength = characters.lowerNumber.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.lowerNumber.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper !== true && lower === true && numerical !== true && special === true) {
      var passwordOutput = ""; //lowerSpecial, FTFT
      var charactersLength = characters.lowerSpecial.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.lowerSpecial.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper !== true && lower === true && numerical === true && special === true) {
      var passwordOutput = ""; //lowerNS, FTTT
      var charactersLength = characters.lowerSpecial.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.lowerSpecial.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else if (upper !== true && lower !== true && numerical === true && special === true) {
      var passwordOutput = ""; //numberSpecial, FFTT
      var charactersLength = characters.numberSpecial.length;
      for (var i = 0; i < charactersLength; i++) {
        passwordOutput += criteria.numberSpecial.charAt(Math.random() * 
        charactersLength);
      }
      return passwordOutput
    } else {
      alert("You must select criteria!");
      location.reload();
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