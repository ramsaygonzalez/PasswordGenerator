var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var pwLength = prompt("How many characters?");
var useLowercase = confirm("Would you like your password to contain a lowercase letter?");
var useUppercase = confirm("Would you like your password to contain a upercase letter?");
var useNumber = confirm("Would you like your password to contain a number?");
var useSpecialChar = confirm("Would you like your password to contain a special character?");
var userResponses = [useLowercase, useUppercase, useNumber, useSpecialChar];

console.log(userResponses.some(Boolean));







function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
