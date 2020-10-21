//*Character Codes
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numChars = "0123456789";
const specialChars = "!@#$%^&*()-_=+{[]}|;:',<.>/?`~";

//*Selectors
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//*Event Listeners on generate and copy buttons
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);


//*Generate password function
function generatePassword() {

  //Empty Strings to build password;  newPassword is where the password will be built; passwordChars will contain the required character types to iterate through
  var newPassword = ""; //
  var passwordChars = "";

  //Prompt user to ask how long the password should be
  var passwordLength = prompt("How many characters should your password contain?");

  //Validation to ensure user enters a number between 8 and 128 in passwordLength prompt
  if(Number(passwordLength < 8) | Number(passwordLength > 128) | isNaN(passwordLength)) {
    alert("You must enter a number between 8 and 128");
    return;
  }

  //Prompt user to include lowercase characters
  var lowercaseCharsInclude = confirm("Would you like to include lowercase characters in your password?");
  
  if(lowercaseCharsInclude) {
    passwordChars += lowercaseChars;
  }

  //Prompt user to include uppercase characters
  var uppercaseCharsInclude = confirm("Would you like to include uppercase characters in your password?");

  if(uppercaseCharsInclude) {
    passwordChars += uppercaseChars;
  }

  //Prompt user to include numerical characters
  var numCharsInclude = confirm("Would you like to include numbers in your password?");

  if(numCharsInclude) {
    passwordChars += numChars;
  }
  
  //Prompt user to include Symbols
  var specialCharsInclude = confirm("Would you like to include symbols in your password?");

  if(specialCharsInclude) {
    passwordChars += specialChars;
  }

  //Validation if user decides not to include any character type
  if(passwordChars === "") {
    alert("You must select at least one character type to include in your password");
  }

  if(Number(passwordLength >=8) && Number(passwordLength <= 128)){
    for(var i = 0; i < passwordLength; i++) {
      newPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    };

    /**Validation to ensure one character type from each of the selected criteria goes here
     * Create a new function that takes in the newly generated password as a parameter, as well as boolean values for each of the required character types
     * 1. iterate through the newly generated password
     * 2. if the password contains at least one character from each requirement, print the password
     * 3. if not, go back and generate a new password
      */

    localStorage.setItem("password", newPassword);
    var pwd = localStorage.getItem("password");
    passwordText.textContent = pwd;
    };
};

//Copy to clipboard function
function copyPassword(){
  passwordText.select();
  document.execCommand("copy");
  alert("Your password has been copied to the clipboard!")
};

