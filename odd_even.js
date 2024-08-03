// Function to check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Get the user input
  const userInput = parseInt(prompt("Enter a number: "));
  
  // Check if the input is even or odd
  const result = checkEvenOdd(userInput);
  
  // Print the result
  console.log(`The number ${userInput} is ${result}.`);