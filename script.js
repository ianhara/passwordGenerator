// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = prompt("Enter the ength of your password 8-128 characters")
  var includeUppercase = confirm("Uppercase letters")
  var includeLowercase = confirm("Lowercase letters")
  var includeSpecial = confirm("Special Characters")
  console.log("hello")
}