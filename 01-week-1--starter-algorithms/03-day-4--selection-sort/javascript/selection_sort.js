function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i
    for (let j = i+1; j < n; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    if (min != i){
      let sorter = arr[i]
      arr[i] = arr[min]
      arr[min] = sorter
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/////////////////////////////////////////////
// First lets get the length of the array
// Then add a for loop that finds smallest element
// Then swap the elements in the array

// And a written explanation of your solution
/////////////////////////////////////////////////
// The code checks the length of the array then with the help of 
// a for loop that finds smallest element by comparing its value 
// against the elements to its right by 1 index if it returns 
// the smallest value that new minimum value is pushed to the front of the
// array
