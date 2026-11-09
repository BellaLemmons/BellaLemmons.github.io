//code to add/remove courses

const clearButton = document.querySelector("button[type='button']");
const inputElements = Array.from(document.querySelectorAll("form input"));
clearButton.addEventListener("click", function () {
  inputs.forEach((input) => (input.value = ""));
});

const formElement = document.getElementById("form");
  formElement.addEventListener("submit", (e) => e.preventDefault()); // prevents page refresh / default behavior

//code to gather data from form and add content in place of form