function findFirstDuplicate(arr) {
  const uniqueValues = new Set();

  for (const value of arr) {
    if (uniqueValues.has(value)) {
      return value;
    }
    uniqueValues.add(value);
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
////////////////////////////////////////////
// First Ill need to create a Set() thats empty
// Then iterate through the array and compare its values individually to elements in the set
// If no elements in the set match the the current value will get added to the set
// This will loop until a match is found
// else return -1
// And a written explanation of your solution
////////////////////////////////////////////
// While iterating through an array each value is compared to the data in a set that is updated after each value 
// has been visited and comfirmed not to have a duplicate value
