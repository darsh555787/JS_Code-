// Function to count the number of digits
function countDigits(num) {
    return Math.abs(num).toString().length;
  }
  
  // Get the user input
  const userInput = parseInt(prompt("Enter a number: "));
  
  // Count the number of digits
  const result = countDigits(userInput);
  
  // Print the result
  console.log(`The number ${userInput} has ${result} digits.`);