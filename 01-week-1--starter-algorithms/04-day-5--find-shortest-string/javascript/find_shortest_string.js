function findShortestString(arr) {
  let shortStr = arr[0];

  arr.forEach(str => {
    str.length < shortStr.length ? shortStr = str : str
  })
  return shortStr
}
// return arr.reduce((shortest, string) => 
// string.length < shortest.length ? string : shortest);

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['c', 'a']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
/////////////////////////////////////////
// Set the first array index to set the smallest string every time one is compared
// Let iterate through each string in the array and check its length against the 
// before it 
// return the first element in the array

// And a written explanation of your solution
////////////////////////////////////////
// Grab the first element in the array then for each element compare it to the 
// first indexes value if its smaller replace it and contine this process until 
// the array[0] has no smaller value than itself 