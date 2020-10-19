var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//Character Codes
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numChars = "0123456789";
const specialChars = "!@#$%^&*()-_=+{[]}|;:',<.>/?`~";


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {

  var newPassword = "";
  var passwordChars = "";

  var passwordLength = prompt("How many characters should your password contain?");

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
    localStorage.setItem("password", newPassword);
    var pwd = localStorage.getItem("password");
    passwordText.textContent = pwd;
    };
};

function copyPassword(){
  passwordText.select();
  document.execCommand("copy");
  passwordText.innerHTML = "";
};