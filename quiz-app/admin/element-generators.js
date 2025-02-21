// element generators ---------------------------------
function createAnswerOptionInputWithButton() {
  const li = document.createElement("li");
  const input = document.createElement("input");
  li.appendChild(input);
  const button = document.createElement("button");
  button.textContent = "+";
  li.appendChild(button);
  return li;
}

function createDropdownAnswerOption(answerKey, answerText) {
  const option = document.createElement("option");
  option.value = answerKey;
  option.textContent = answerText;
  return option;
}
//  ------------------------------------------------------
