

// Assignment Code
var generateBtn = document.querySelector('#generate');

//created variables for uppercase, lowercase, numbers and special characters//

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"; 
var specChar = "!@#$%^&*()<>_-=?";

for(var i=0; i<upperChar.length; i++)//alert(upperChar);
var randomUpper =Math.floor(Math.random() * upperChar.length);

for(var i=0; i<lowerChar.length; i++)//alert(lowerChar);
var randomLower =Math.floor(Math.random() * lowerChar.length);

for(var i=0; i<numbers.length; i++)//alert(numbers);
var num =Math.floor(Math.random() * numbers.length);

for(var i=0; i<specChar.length; i++)//alert(specChar);
var randomSpec =Math.floor(Math.random() * specChar.length);




var userSelection = [];
var randomPassw = [];

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}

function generatePassword() {
  var pwlength = prompt('Choose between 8 and 128 password charachters');
  console.log(pwlength);

  var quesUpChar = confirm('Press ok if you would like upper case ;letters in your password');
  if(quesUpChar === true) {
  
    userSelection.push(upperChar);
  }
  
  
  var quesLowChar = confirm('press ok if you would like lower case letters in your password')
  
  if(quesLowChar === true) {

    userSelection.push(lowerChar);
  }
  
  var number = confirm('press ok if you would like a number in your password');
  if(number === true) {

    userSelection.push(numbers);
  }
  var special = confirm('press ok if you would like a special character in your password');
  if(special === true) {

    userSelection.push(specChar);
  }
console.log(userSelection);
console.log(userSelection.join(""))

for (var i = 0; i < pwlength; i++) {
  var compList=userSelection.join("")
  var randomNumber =Math.floor(Math.random() * compList.length);
  console.log(randomNumber);
}
return pwlength
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);