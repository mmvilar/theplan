let exercise = {
  correctAnswer: createQuestionReturnAnswer(),
  elInput: document.getElementById('input'),
  elButton: document.getElementById('submit'),
};

function randomNumber(number) {
  return Math.ceil(Math.random() * number);
}

function createQuestionReturnAnswer() {
  let elFirstNumber = document.getElementById('first-number');
  let elSecondNumber = document.getElementById('second-number');
  let firstNumber = randomNumber(3);
  let secondNumber = randomNumber(9);
  elFirstNumber.innerHTML = firstNumber;
  elSecondNumber.innerHTML = secondNumber;
  return firstNumber * secondNumber;
}
console.log('hello');

exercise.elButton.addEventListener('click', () => {
  if (exercise.correctAnswer == exercise.elInput.value) {
    message.writeMessage('good');
  } else {
    message.writeMessage('idiot');
  }
  setTimeout(() => {
    exercise.correctAnswer = createQuestionReturnAnswer();
    message.writeMessage('');
    exercise.elInput.value = '';
  }, 3000);
});
