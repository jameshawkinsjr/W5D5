const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} > ${el2}:  `, (res) => {
    callback(res);
  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else { 
    askIfGreaterThan(arr[i], arr[i+1], function(res) {
      (res === "yes") ? res = true : res = "doesn't matter";
      if (res === true) {
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
        innerBubbleSortLoop(arr, i, res, outerBubbleSortLoop);
      };
      i++
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  };
};

// innerBubbleSortLoop([1, 2, 3, 4, 5, 6], 0, false, outerBubbleSortLoop);
// innerBubbleSortLoop([1, 2, 3], 0, true, outerBubbleSortLoop);
// innerBubbleSortLoop([1, 2, 3], 2, false, outerBubbleSortLoop);

// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
      if (madeAnySwaps === true) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
      } else {
        sortCompletionCallback(arr);
      };
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  };
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([1, 2, 3, 4, 5, 6, 7], function (arr) {
absurdBubbleSort([3, 2, 1, 5, 7, 8], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// askIfGreaterThan(1,2, console.log)
