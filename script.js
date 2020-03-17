var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var arrLowerCase = Array.from(lowerCase);
var arrUpperCase = Array.from(upperCase);
var arrNumbers = Array.from(numbers);
var arrSpecialChar = Array.from(specialChar);


function generatePassword() {
  var pwLength = prompt("Enter desired password length. Must be greater than or equal to 8 but less than or equal to 128?");
  if (pwLength >= 8 && pwLength <= 128) {
    var useLowercase = confirm("Would you like your password to contain a lowercase letter?")
    var useUppercase = confirm("Would you like your password to contain a upercase letter?");
    var useNumber = confirm("Would you like your password to contain a number?");
    var useSpecialChar = confirm("Would you like your password to contain a special character?");
    var arrUserResponses = [useLowercase, useUppercase, useNumber, useSpecialChar]
    var arrPasswordCharacters = [];

    if (arrUserResponses.some(Boolean)) {
      if (arrUserResponses[0] === true) {
        arrPasswordCharacters.push(arrLowerCase)
      }
      if (arrUserResponses[1] === true) {
        arrPasswordCharacters.push(arrUpperCase)
      }

      if (arrUserResponses[2] === true) {
        arrPasswordCharacters.push(arrNumbers)
      }

      if (arrUserResponses[3] === true) {
        arrPasswordCharacters.push(arrSpecialChar)
      }
      var arrMergePassChar = arrPasswordCharacters.flat(1)
      var PasswordCharacters = arrMergePassChar.toString()
    
      console.log(arrPasswordCharacters)
      console.log(arrMergePassChar)
      console.log(PasswordCharacters)
      console.log("good")
    }
    else {
      console.log("bad")
    }
  }
  else {
    console.log("Bad")
  }
}

generatePassword()

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);