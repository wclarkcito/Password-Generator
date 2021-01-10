

// Assignment Code
var generateBtn = document.getElementById('generate');

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"; 
var specChar = "!@#$%^&*()<>_-=?";

var userSelection = [];
var randomPassw = [];

// Write password to the #password input
function writePassword() {
  //alert(upperChar);
  //alert(lowerChar);
  //alert(numbers);
  //alert(specChar);

  var password = generatePassword();
  var passwordText = document.getElementById('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = prompt('Choose between 8 and 128 password charachters');
  console.log(pwlength);

  var quesUpChar = confirm('Press ok if you would like upper case ;letters in your password');
  if(quesUpChar) {
    userSelection.push(upperChar);
  }
  console.log(userSelection);


  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);