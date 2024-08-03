// Function to find duplicate characters in a string
function findDuplicates(str) {
    let charCount = {};
    let duplicates = [];
  
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    for (let char in charCount) {
      if (charCount[char] > 1) {
        duplicates.push(char);
      }
    }
  
    return duplicates;
  }
  
  // Get the user input
  const userInput = prompt("Enter a string: ");
  
  // Find the duplicate characters
  const duplicates = findDuplicates(userInput);
  
  // Print the result
  if (duplicates.length > 0) {
    console.log(`The duplicate characters in the string are: ${duplicates.join(", ")}`);
  } else {
    console.log("There are no duplicate characters in the string.");
  }