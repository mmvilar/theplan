function randomNumber(number) {
  return Math.ceil(Math.random() * number)
}

let firstNumber = randomNumber(6)
let secondNumber = randomNumber(3)
let correctAnswer = firstNumber + secondNumber

let elFirstNumber = document.getElementById("first-number")
let elSecondNumber = document.getElementById("second-number")

elFirstNumber.innerHTML = firstNumber
elSecondNumber.innerHTML = secondNumber

let elButton = document.getElementById("submit")
let elInput = document.getElementById("number")
elButton.addEventListener("click", () => {
  if (elInput.value == correctAnswer) {
    document.getElementById("message").innerHTML = "Winner"
  }
  else { document.getElementById("message").innerHTML = "Loser" }
  randomNumber()
})
