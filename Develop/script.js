// Assignment code here

/* 
Pseudocode

Clicking button runs password generation function
Prompt for length of password (8-128 characters)
Prompt for lowercase
Prompt for uppercase
Prompt for numeric
Prompt for special characters
At least one must be chosen
When all prompts answered, password is generated
Generated password is shown in an alert or displayed on the page
*/

var passwordLength = function () {
  var promptLength = window.prompt(
    "How long would you like your password to be? Please choose a number from 8 to 128."
  );
  if (
    promptLength === "" ||
    promptLength === null ||
    promptLength <= 8 ||
    promptLength >= 128
  ) {
    window.alert(
      "Your selection is invalid. Please choose a number from 8 to 128."
    );
    return passwordLength();
  } else {
    promptLength = parseInt(promptLength);
    return promptLength;
  }
};

const password = {
  length: passwordLength(),
  lettersUpper: ABCDEFGHIJKLMNOPQRSTUVWXYZ,
  lettersLower: abcdefghijklmnopqrstuvwxyz,
  // charactersSpecial: !@#$%^&*,
  charactersNum: 1234567890,
};

generatePassword = function () {
  passwordLength();
  var passwordLower = function () {
    var promptLower = window.prompt(
      "Would you like to include lowercase letters? Please enter 'Yes' or 'No.'"
    );
    if (promptLower === "" || promptLower === null) {
      window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
      return passwordLower();
    } else if (promptLower === "Yes" || promptLower === "yes") {
      return promptLower;
    }
  };

  passwordLower();

  var passwordUpper = function () {
    var promptUpper = window.prompt(
      "Would you like to include uppercase letters? Please enter 'Yes' or 'No.'"
    );
    if (promptUpper === "" || promptUpper === null) {
      window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
      return passwordUpper();
    } else if (promptUpper === "Yes" || promptUpper === "yes") {
      return promptUpper;
    }
  };

  passwordUpper();

  var passwordNum = function () {
    var promptNum = window.prompt(
      "Would you like to include numbers? Please enter 'Yes' or 'No.'"
    );
    if (promptNum === "" || promptNum === null) {
      window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
      return passwordNum();
    } else if (promptNum === "Yes" || promptNum === "yes") {
      return promptNum;
    }
  };

  passwordNum();

  var passwordSpecial = function () {
    var promptSpecial = window.prompt(
      "Would you like to include special characters? Please enter 'Yes' or 'No.'"
    );
    if (promptSpecial === "" || promptSpecial === null) {
      window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
      return passwordSpecial();
    } else if (promptSpecial === "Yes" || promptSpecial === "yes") {
      return promptNum;
    }
  };
  passwordSpecial();

  for (var i = 0; i < password.length; i++) {}
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
