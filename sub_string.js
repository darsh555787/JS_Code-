// Get the user input
const mainString = prompt("Enter the main string: ");
const subString = prompt("Enter the substring to check: ");

// Check if the substring is present in the main string
if (mainString.includes(subString)) {
  console.log(`"${subString}" is a substring of "${mainString}"`);
} else {
  console.log(`"${subString}" is not a substring of "${mainString}"`);
}
