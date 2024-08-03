// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Get the user input
  const userInput = parseInt(prompt("Enter a number: "));
  
  // Check if the input is prime
  const result = isPrime(userInput);
  
  // Print the result
  console.log(`The number ${userInput} is ${result ? "prime" : "not prime"}.`);