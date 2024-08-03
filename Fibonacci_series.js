// Function to generate Fibonacci series
function fibonacci(n) {
    let a = 0;
    let b = 1;
    let series = [a, b];
  
    // Generate Fibonacci series
    for (let i = 2; i <= n; i++) {
      let next = a + b;
      series.push(next);
      a = b;
      b = next;
    }
  
    return series;
  }
  
  // Get the user input
  const userInput = parseInt(prompt("Enter the number of terms: "));
  
  // Generate Fibonacci series
  const series = fibonacci(userInput);
  
  // Print the Fibonacci series
  console.log("Fibonacci Series:");
  console.log(series.join(", "));