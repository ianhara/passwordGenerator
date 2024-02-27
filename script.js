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

//elements to add to string
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = uppercase.toLowerCase();
var special = "!@#$%^&*()-+=<>,.";
var number = "123456789";

//the string that we will add all of the characters that are chosen
var passwordString = "";
console.log(uppercase, lowercase);

function generatePassword() {
  //set length variable to false until valid input is gained
  var passLength = false;

  //using a while loop to make sure that a valid length is entered
  while (!passLength) {
    var passwordLength = prompt(
      "Enter the ength of your password 8-128 characters"
    );
    //if passwordlength is valid exit
    if (
      !isNaN(passwordLength) &&
      passwordLength >= 8 &&
      passwordLength <= 128
    ) {
      passLength = true;
    } else alert("invalid length, please enter a value from 8-128");
  }

  //variables to add to string
  var includeUppercase = confirm("Uppercase letters");
  var includeLowercase = confirm("Lowercase letters");
  var includeSpecial = confirm("Special Characters");
  var includeNumber = confirm("numbers");

  //if all false return otherwise concatenate desired chars
  if (
    !includeLowercase &&
    !includeNumber &&
    !includeSpecial &&
    !includeUppercase
  ) {
    alert("you must select yes for at least one");
    generatePassword();
    return;
  }
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

  //empty string to be set
  var password = "";

  //loop initalizes the elements of final "password" with random chars taken from pass String
  for (var i = 0; i < passwordLength; i++) {
    var randomchar = Math.floor(Math.random() * passwordString.length);
    password += passwordString[randomchar];
    console.log(password, "loop");
  }
  //displays the password in the box
  return password;
}
