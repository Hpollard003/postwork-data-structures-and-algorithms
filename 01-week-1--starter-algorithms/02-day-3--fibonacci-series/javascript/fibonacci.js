function fibonacci(num) {
  if (num < 2){
    return num
  }

  let fibonacciPair = [0 , 1]
  for (let i = 0; i < num - 1; ++i){
    let result = fibonacciPair[0] + fibonacciPair[1]
    fibonacciPair = [fibonacciPair[1] , result]
  }
  return fibonacciPair[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
///////////////////////////////////////
// If the number is less than 2 then return it as is
// Set up a pair of initial values to be used in a for loop
// Then set the for loop to iterate over i to the n-1 times 
// Update the pair in the loop 
// Return the last index in the pair

// And a written explanation of your solution
/////////////////////////////////////////////////
// The nth element is the index of the number I want to return
// Unless the number is lower than 2 just return the number
// Initialize an array pair of numbers to add together the same number 
// as the input value and return the last one
