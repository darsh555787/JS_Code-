// Define the array
let array1 = [2, 4, 7, 1, 99];

// Add 23 to the array
array1.push(23);

// Remove 7 from the array
let index = array1.indexOf(7);
if (index !== -1) {
  array1.splice(index, 1);
}

// Display the updated array
console.log("Updated Array: ", array1);