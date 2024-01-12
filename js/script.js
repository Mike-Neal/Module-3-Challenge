// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var enter;
var askNumber;
var askCharacter;
var askUppercase;
var askLowercase;
var choices;
var password = [];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
character = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", " < ", "=", " ? ", "@", "_"];
var toUpper = function (x) {
  return x.toUpperCase();
};
letter2 = letter.map(toUpper);
space = [];



// Write password to the #password input
function writePassword() {
  password = generatePassword();


  passwordText.value = password;
  //console.log(writePassword)
}

function generatePassword() {
  enter = parseInt(prompt("Choose between 8 to 128 characters for your password"));
  if (!enter) {
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Please choose between 8 and 128"));
  } else {
    askNumber = confirm("Do you want numbers?");
    askCharacter = confirm("Do you want special characters?");
    askUppercase = confirm("Do you want Uppercase letters?");
    askLowercase = confirm("Do you want Lowercase letters?");
  };

  if (!askCharacter && !askNumber && !askUppercase && !askLowercase) {
    choices = alert("Please choose a criteria!");
  } else if (askCharacter && askNumber && askLowercase) {
    choices = character.concat(number, letter);
  }
  else if (askCharacter && askNumber && askUppercase) {
    choices = character.concat(number, letter2);
  }
  else if (askCharacter && askUppercase && askLowercase) {
    choices = character.concat(letter2, letter);
  }
  else if (askNumber && askUppercase && askLowercase) {
    choices = number.concat(letter2, letter);
  } else if (askCharacter && askNumber && askUppercase && askLowercase) {
    choices = character.concat(number, letter2, letter);
  }

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var pwd = password.join("");
  UserInput(pwd);
  return pwd;
  function UserInput(pwd) {
    document.getElementById("password").textContent = pwd;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





