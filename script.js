//Character types in strings to build password
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+{[]}|;:',<.>/?`~";

//Selectors and event listeners
var passwordText = document.getElementById('password');
var generateBtn = document.getElementById('generate').addEventListener("click", generatePassword);
var copyBtn = document.getElementById('copy').addEventListener("click", copyPassword);

//Generate password function
function generatePassword() {

  /* Empty Strings to build password;
   * newPassword is where the password will be built;
   * passwordChars will contain the required character types to iterate through */
  var newPassword = ""; 
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
  
  //If user confirms, concatenate lowercaseChars string with the string (passwordChars)
  if(lowercaseCharsInclude) {
    passwordChars += lowercaseChars;
  }

  //Prompt user to include uppercase characters
  var uppercaseCharsInclude = confirm("Would you like to include uppercase characters in your password?");

  //If user confirms, concatenate uppercaseChars string with the string (passwordChars)
  if(uppercaseCharsInclude) {
    passwordChars += uppercaseChars;
  }

  //Prompt user to include numerical characters
  var numCharsInclude = confirm("Would you like to include numbers in your password?");

  //If user confirms, concatenate numChars string with the string (passwordChars)
  if(numCharsInclude) {
    passwordChars += numChars;
  }
  
  //Prompt user to include Symbols
  var specialCharsInclude = confirm("Would you like to include symbols in your password?");

   //If user confirms, concatenate numChars string with the string (passwordChars)
  if(specialCharsInclude) {
    passwordChars += specialChars;
  }

  //Validation if user decides not to include any character type and string remains empty
  if(passwordChars === "") { 
    alert("You must select at least one character type to include in your password");
  }

/** If the length of the password is greater than or equal to 8, and less than or equal to 128
 * Iterate through the passwordChars string
 * Take a random character in the string to concatenate to the empty string variable (newPassword) */
  if(Number(passwordLength >= 8) && Number(passwordLength <= 128)) {
    for(var i = 0; i < passwordLength; i++) {
      newPassword += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    };

    /**Validation to ensure one character type from each of the selected criteria goes here
     * Create a new function that takes in the newly generated password as a parameter, as well as boolean values for each of the required character types
     * 1. iterate through the newly generated password
     * 2. if the password contains at least one character from each requirement, print the password
     * 3. if not, go back and generate a new password
      
function validatePassword(newPassword, lowercaseCharsInclude, uppercaseCharsInclude, numCharsInclude, specialCharsInclude) {
      for(var i = 0; i < newPassword.length; i++) {
        if(lowercaseCharsInclude) {
          if(newPassword.charAt(i).includes(lowercaseChars) {

*        }  
*      }
*    }
*  }
*/

//Writes newly generated password to password textfield
    passwordText.textContent = newPassword;
    };
};

/** Copy to clipboard function
 * Selects password field using select() method
 * Copies selected text using execCommand("copy")
 * Alerts user the password has been copied 
 *  */
function copyPassword(){
  passwordText.select();
  document.execCommand("copy");
  alert("Your password has been copied to the clipboard!")
};

