// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  // Prompt for password
  let length = prompt("Enter the desired length of your password (at least 8 characters but no more than 128):");
  let lowercase = confirm("Include lowercase characters?");
  let uppercase = confirm("Include uppercase characters?");
  let numeric = confirm("Include numeric characters?");
  let special = confirm("Include special characters ($@%&*, etc)?");

  // Validate input
  if (length < 8 || length > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return;
  }
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type.");
    return;
  }

  // Generate password
  let password = "";
  let charTypes = [];
  if (lowercase) charTypes = charTypes.concat(lowerCasedCharacters);
  if (uppercase) charTypes = charTypes.concat(upperCasedCharacters);
  if (numeric) charTypes = charTypes.concat(numericCharacters);
  if (special) charTypes = charTypes.concat(specialCharacters);

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charTypes.length);
    password += charTypes[randomIndex];
  }
  // Display password in textarea 
  document.querySelector("#password").innerHTML = password;
  // Display password in alert 
  alert("Your generated password is: " + password);
});
