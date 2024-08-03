function removeWhitespace(input) {
    return input.replace(/\s+/g, '');
  }
  
  // Get user input
  let userInput = prompt("Please enter a string: ");
  
  // Remove whitespace and display the result
  let result = removeWhitespace(userInput);
  console.log("Result:", result);