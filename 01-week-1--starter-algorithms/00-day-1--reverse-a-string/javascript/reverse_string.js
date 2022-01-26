// Please add your pseudocode to this file
//////////////////////////////////////////
// I need to return a string but with all of its characters in reverse order.
//////////////////////////////////////////
// And a written explanation of your solution


function reverseString(str) {
  // First I can split() the string into an array of characters
  let strArray = str.split('')
  // Then reverse() the array
  let reverse = strArray.reverse()
  // And join() all the character back together.
  return reverse.join('')
}

if (require.main === module) {
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

