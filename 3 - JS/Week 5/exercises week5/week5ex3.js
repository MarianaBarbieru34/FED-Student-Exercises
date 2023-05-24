// Get the input and result elements
const numberInput = document.getElementById("numberInput");
const resultDiv = document.getElementById("result");
const checkButton = document.getElementById("checkButton");

// Add event listener to the check button
checkButton.addEventListener("click", function () {
  const number = parseInt(numberInput.value);

  if (isPrime(number)) {
    resultDiv.textContent = `${number} is a prime number.`;
  } else {
    resultDiv.textContent = `${number} is not a prime number.`;
  }
});

// Function to check if a number is prime
function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }
}

// Check if the number is divisible by any number from 2 to the square root of the number
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    return false;
  }
}
