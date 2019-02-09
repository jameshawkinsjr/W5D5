const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {

  if (numsLeft > 0) {
    reader.question('Please enter a number: ', (res) => {
      sum += parseInt(res);
      completionCallback(sum);
      console.log(`${sum}`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}



addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
