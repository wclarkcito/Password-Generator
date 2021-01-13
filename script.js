

// Assignment Code
var generateBtn = document.querySelector('#generate');

//created variables for uppercase, lowercase, numbers and special characters//

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"; 
var specChar = "!@#$%^&*()<>_-=?";

//created variable to combine all characters
var combChar=[];





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
//conditionals for upper case characters//
  var quesUpChar = confirm('Press ok if you would like upper case ;letters in your password');
  if(quesUpChar === true) {
  
    userSelection.push(upperChar);
  }
  
  //conditionals for lower case characters//
  var quesLowChar = confirm('press ok if you would like lower case letters in your password')
  
  if(quesLowChar === true) {

    userSelection.push(lowerChar);
  }
  //conditionals for numbers//
  var number = confirm('press ok if you would like a number in your password');
  if(number === true) {

    userSelection.push(numbers);
  }
  //conditionals for special characters//
  var special = confirm('press ok if you would like a special character in your password');
  if(special === true) {

    userSelection.push(specChar);
  }
console.log(userSelection);
console.log(userSelection.join(""))

for (var i = 0; i < pwlength; i++) {
  var compList=userSelection.join("")
  var randomNumber =Math.floor(Math.random() * compList.length);
  combChar.push(compList[randomNumber]);
  console.log(combChar);
}
//added variable combChar.join('') to return
return combChar.join('');
//console.log(combChar.toString());
  
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);