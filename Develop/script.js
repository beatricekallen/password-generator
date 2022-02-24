// Assignment code here
function generatePassword() {
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

  var promptUpper = window.confirm("Click OK to include uppercase letters.");
  var promptLower = window.confirm("Click OK to include lowercase letters.");
  var promptNum = window.confirm("Click OK to include numbers.");
  var promptSpecial = window.confirm("Click OK to include special characters.");

  function makePassword(length) {
    var password = "";
    if (promptUpper && promptLower && promptNum && promptSpecial) {
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";
    } else if (promptUpper && promptLower && promptNum && !promptSpecial) {
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    } else if (promptUpper && promptLower && !promptNum && promptSpecial) {
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    } else if (!promptUpper && promptLower && promptNum && promptSpecial) {
      var characters = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*";
    } else if (promptUpper && !promptLower && promptNum && promptSpecial) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*";
    } else if (promptUpper && !promptLower && promptNum && !promptSpecial) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    } else if (promptUpper && promptLower && !promptNum && !promptSpecial) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if (promptUpper && !promptLower && !promptNum && promptSpecial) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    } else if (!promptUpper && promptLower && promptNum && !promptSpecial) {
      var characters = "abcdefghijklmnopqrstuvwxyz123456789";
    } else if (!promptUpper && promptLower && !promptNum && promptSpecial) {
      var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
    } else if (!promptUpper && !promptLower && promptNum && promptSpecial) {
      var characters = "123456789!@#$%^&*";
    } else if (promptUpper && !promptLower && !promptNum && !promptSpecial) {
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (!promptUpper && promptLower && !promptNum && !promptSpecial) {
      var characters = "abcdefghijklmnopqrstuvwxyz";
    } else if (!promptUpper && !promptLower && !promptNum && promptSpecial) {
      var characters = "!@#$%^&*";
    } else if (!promptUpper && !promptLower && promptNum && !promptSpecial) {
      var characters = "123456789";
    } else {
      window.alert("You must select at least one criteria. Please try again.");
    }

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }
    return password;
  }
  return makePassword(promptLength);
}

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
