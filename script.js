var string = "adfdl";

var randomchar = Math.floor(Math.random() * string.length);

console.log(randomchar);

console.log(string[randomchar]);

for (var i = 0; i < string.length; i++) {
  console.log(i, "loop");
}

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

var uppercase = "ABCD";
var lowercase = uppercase.toLowerCase();
var special = "!@#$";
var number = "1234";
var passwordString = "";

console.log(uppercase, lowercase);

function generatePassword() {
  var passwordLength = prompt(
    "Enter the ength of your password 8-128 characters"
  );
  var includeUppercase = confirm("Uppercase letters");
  var includeLowercase = confirm("Lowercase letters");
  var includeSpecial = confirm("Special Characters");
  var includeNumber = confirm("numbers");

  if (includeUppercase) {
    passwordString += uppercase;
    console.log(passwordString);
  }

  if (includeLowercase) {
    passwordString += lowercase;
    console.log(passwordString);
  }

  if (includeSpecial) {
    passwordString += special;
    console.log(passwordString);
  }

  if (includeNumber) {
    passwordString += number;
    console.log(passwordString);
  }

  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomchar = Math.floor(Math.random() * passwordString.length );
    password+= passwordString[randomchar]
    console.log(password, "loop");
  }
  return password
}
