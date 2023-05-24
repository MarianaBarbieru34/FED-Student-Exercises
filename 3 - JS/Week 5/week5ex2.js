// Get the input and output text areas
const inputTextArea = document.getElementById("inputTextArea");
const outputTextArea = document.getElementById("outputTextArea");
const removeButton = document.getElementById("removeButton");

// Add event listener to the remove button
removeButton.addEventListener("click", function () {
  const inputText = inputTextArea.value;
  const result = removeVowels(inputText);
  outputTextArea.value = result;
  console.log("Input:", inputText);
  console.log("Output:", result);
});

// Function to remove vowels from the string
function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let vowel of vowels) {
    str = str.replace(new RegExp(vowel, "gi"), "");
  }

  return str;
}
