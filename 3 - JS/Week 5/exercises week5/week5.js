const form = document.getElementById("numberForm");
const resultDiv = document.getElementById("result");

// Array to store the numbers
let numbers = [2.555, 2, 5.5];

// Add event listener to the form's submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get the input value
  const numberInput = document.getElementById("numberInput");
  const number = parseFloat(numberInput.value);

  // Add the number to the array
  numbers.push(number);

  // Clear the input
  numberInput.value = "";

  // Call the findLargestNumber function
  const largestNumber = findLargestNumber(numbers);

  // Update the result element
  resultDiv.innerHTML = `The largest number is: ${largestNumber}`;
});

// Function to find the largest number in the array
function findLargestNumber(arr) {
  let largest = arr[0];

  // Iterate through the array
  for (let i = 1; i < arr.length; i++) {
    // Check if the current number is larger than the current largest number
    if (arr[i] > largest) {
      // If true, update the largest number
      largest = arr[i];
    }
  }

  // Return the largest number
  return largest;
}

// Testing with console log
console.log(numbers); // [2.555, 2, 5.5]
console.log(findLargestNumber(numbers)); // 5.5
