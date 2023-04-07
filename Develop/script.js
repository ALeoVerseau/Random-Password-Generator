// Assignment code here
var characterLength = 8;
var choice = [];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["~","!","@","#","$","%","^","&","*","?","-","_"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correct = getPrompts(); // either true or flase
  var passwordText = document.querySelector("#password");

  if (correct) { 
    var password = generatePassword();
    
  
    passwordText.value = password;
  } else {
    passwordTest.value = "";

  }
  

  

}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex]; 
  
  }
  return password;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPrompts() {
  choice = [];
  characterLength = parseInt(prompt("How many charcters do you want your password to be? (8 - 128 characters)")); 

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8-12 digits. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    choice = choice.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choice = choice.concat(upperCase);
  }
  if (confirm("Would you like numbers in your password?")) {
    choice = choice.concat(numbers);
  }
  if (confirm("Would you like symbols in your password?")) {
    choice = choice.concat(symbols);
  }

  return true;
}