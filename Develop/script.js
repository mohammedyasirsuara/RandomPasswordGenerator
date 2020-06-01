//Function to generate password 
function generatePassword(){
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const special = "~!@#$%&^*()-_+={}[]\|/;:<>,.?";
  const number = "1234567890";
  let nPassword="";
  let password="";
  
  
  let pLength = parseInt(prompt("Pick a password length between 8 and 128"));
  if(pLength<8 || pLength>128 || isNaN(pLength)){
    alert("You need to enter a number between 8 and 128");

  }else{
    var Lcase = confirm("Do you want the password to contain Lower case?");
    var Ucase = confirm("Do you want the password to contain Upper case?");
    var sLetters = confirm("Do you want the password to contain Special characters?");
    var num = confirm("Do you want the password to contain numbers?");

    if(Ucase){
      nPassword+=uppercase;
    }if(Lcase){
      nPassword+=lowercase;
    }if(sLetters){
      nPassword+=special;
    }if(num){
      nPassword+=number;
    }
    if(!num&&!Lcase&&!Ucase&&!sLetters){
      alert("You need to select a password criteria")
      
    }

    while(0!=pLength){
      password += nPassword.charAt(Math.floor(Math.random()*nPassword.length));
      pLength = pLength-1;
    }
  }

  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);