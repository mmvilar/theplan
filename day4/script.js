function myFunction() {
  let firstNumber = Math.ceil(Math.random() * 3); // this variable will contain a number like 3
  let secondNumber = Math.ceil(Math.random() * 9); // this variable will contain a number like 5

  let elFirstNumber = document.getElementById('first-number'); // this is a node that points to the inside of, <span id="first-number">put number here </span>
  let elSecondNumber = document.getElementById('second-number'); // this is a node that points to the inside of, <span id="second-number">put number here </span>

  elFirstNumber.innerHTML = firstNumber;
  elSecondNumber.innerHTML = secondNumber;

  return firstNumber + secondNumber;
}

let correctAnswer = myFunction();

let submit = document.getElementById('submit');
let input = document.getElementById('number');

submit.addEventListener('click', () => {
  if (input.value == correctAnswer) {
    document.getElementById('message').innerHTML = 'congrats';
  } else {
    document.getElementById('message').innerHTML = 'sorry';
  }
  myFunction();
});
