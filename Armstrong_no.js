// Function to check if a number is an Armstrong number
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, digits);
      temp = Math.floor(temp / 10);
    }
  
    return sum === num;
  }
  
  // Get the user input
  const userInput = parseInt(prompt("Enter a number: "));
  
  // Check if the input is an Armstrong number
  const result = isArmstrong(userInput);
  
  // Print the result
  console.log(`The number ${userInput} is ${result ? "an Armstrong number" : "not an Armstrong number"}.`);