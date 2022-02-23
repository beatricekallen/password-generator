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

var promptLength = window.prompt(
  "How long would you like your password to be? Please choose a number from 8 to 128."
);
if (
  promptLength === "" ||
  promptLength === null ||
  promptLength < 8 ||
  promptLength > 128
) {
  window.alert(
    "Your selection is invalid. Please choose a number from 8 to 128."
  );
} else {
  promptLength = parseInt(promptLength);
}

var promptUpper = window.prompt(
  "Would you like to include uppercase letters? Please enter 'Yes' or 'No.'"
);
if (promptUpper === "" || promptUpper === null) {
  window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
}
// else if (promptUpper === "Yes" || promptUpper === "yes") {
//   return promptUpper;
// }

var promptLower = window.prompt(
  "Would you like to include lowercase letters? Please enter 'Yes' or 'No.'"
);
if (promptLower === "" || promptLower === null) {
  window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
}
// else if (promptLower === "Yes" || promptLower === "yes") {
//   return promptLower;
// }

var promptNum = window.prompt(
  "Would you like to include numbers? Please enter 'Yes' or 'No.'"
);
if (promptNum === "" || promptNum === null) {
  window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
}
// else if (promptNum === "Yes" || promptNum === "yes") {
//   return promptNum;
// }

var promptSpecial = window.prompt(
  "Would you like to include special characters? Please enter 'Yes' or 'No.'"
);
if (promptSpecial === "" || promptSpecial === null) {
  window.alert("Your selection is invalid. Please answer 'Yes' or 'No.'");
}
// else if (promptSpecial === "Yes" || promptSpecial === "yes") {
//   return promptSpecial;
// }

function generatePassword(length) {
  var password = "";
  if (
    promptUpper === "Yes" &&
    promptLower === "Yes" &&
    promptNum === "Yes" &&
    promptSpecial === "Yes"
  ) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "Yes" &&
    promptNum === "Yes" &&
    promptSpecial === "No"
  ) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "Yes" &&
    promptNum === "No" &&
    promptSpecial === "Yes"
  ) {
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  } else if (
    promptUpper === "No" &&
    promptLower === "Yes" &&
    promptNum === "Yes" &&
    promptSpecial === "Yes"
  ) {
    var characters = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "No" &&
    promptNum === "Yes" &&
    promptSpecial === "Yes"
  ) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "No" &&
    promptNum === "Yes" &&
    promptSpecial === "No"
  ) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "Yes" &&
    promptNum === "No" &&
    promptSpecial === "No"
  ) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "No" &&
    promptNum === "No" &&
    promptSpecial === "Yes"
  ) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  } else if (
    promptUpper === "No" &&
    promptLower === "Yes" &&
    promptNum === "Yes" &&
    promptSpecial === "No"
  ) {
    var characters = "abcdefghijklmnopqrstuvwxyz123456789";
  } else if (
    promptUpper === "No" &&
    promptLower === "Yes" &&
    promptNum === "No" &&
    promptSpecial === "Yes"
  ) {
    var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
  } else if (
    promptUpper === "No" &&
    promptLower === "No" &&
    promptNum === "Yes" &&
    promptSpecial === "Yes"
  ) {
    var characters = "123456789!@#$%^&*";
  } else if (
    promptUpper === "Yes" &&
    promptLower === "No" &&
    promptNum === "No" &&
    promptSpecial === "No"
  ) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (
    promptUpper === "No" &&
    promptLower === "Yes" &&
    promptNum === "No" &&
    promptSpecial === "No"
  ) {
    var characters = "abcdefghijklmnopqrstuvwxyz";
  } else if (
    promptUpper === "No" &&
    promptLower === "No" &&
    promptNum === "No" &&
    promptSpecial === "Yes"
  ) {
    var characters = "!@#$%^&*";
  } else if (
    promptUpper === "No" &&
    promptLower === "No" &&
    promptNum === "Yes" &&
    promptSpecial === "No"
  ) {
    var characters = "123456789";
  }

  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}

console.log(generatePassword(promptLength));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(promptLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
