

// Assignment Code
var generateBtn = document.getElementById('generate');

var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"]; 
var specChar = ["!@#$%^&*()<>_-=?"];

for(var i=0; i<upperChar.length; i++)//alert(upperChar);
var upperChar =Math.floor(Math.random() * 26) + 1;

for(var i=0; i<lowerChar.length; i++)//alert(lowerChar);
var lowerChar =Math.floor(Math.random() * 26) + 1;

for(var i=0; i<numbers.length; i++)//alert(numbers);
var num =Math.floor(Math.random() * 10) + 1;

for(var i=0; i<specChar.length; i++)//alert(specChar);
var specChar =Math.floor(Math.random() * 16) + 1;




var userSelection = [];
var randomPassw = [];

// Write password to the #password input
function writePassword() {


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