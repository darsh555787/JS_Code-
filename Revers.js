// Function to reverse a string
function reverseString(str) {
return str.split("").reverse().join("");
}
  
  // Function to reverse a number
function reverseNumber(num) {
return parseInt(num.toString().split("").reverse().join(""));
}
  
  // Get user input
const userInputString = prompt("Enter a string:");
const userInputNumber = prompt("Enter a number:");
  
  // Reverse the input string and number
const reversedString = reverseString(userInputString);
const reversedNumber = reverseNumber(userInputNumber);
  
  // Display the results
console.log(`Reversed String: ${reversedString}`);
 console.log(`Reversed Number: ${reversedNumber}`);