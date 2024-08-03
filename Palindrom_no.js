// Function to check if a number is a palindrome
function isPalindrome(num) {
    // Convert the number to a string
    const numStr = num.toString();
    
    // Compare the string with its reverse
    return numStr === numStr.split('').reverse().join('');
  }
  
  // Get the user input
  const userInput = prompt("Enter a number: ");
  
  // Check if the input is a palindrome
  if (isPalindrome(userInput)) {
    console.log(`${userInput} is a palindrome.`);
  } else {
    console.log(`${userInput} is not a palindrome.`);
  }