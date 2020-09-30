function setQuestion(questionObject) {
  document.querySelector('#question').innerHTML = questionObject.question
  document.querySelector('#a').innerHTML = questionObject.a
  document.querySelector('#b').innerHTML = questionObject.b
  document.querySelector('#c').innerHTML = questionObject.c
}

let currentQuestion = 0

let question1 = {
  question: "hur gammal är jag??",
  a: "56",
  b: "25",
  c: "34",
  correctAnswer: "25"
}

let question2 = {
  question: "vad pratar jag för språk??",
  a: "ryska",
  b: "portugisiska",
  c: "svenska",
  correctAnswer: "portugisiska"
}

let question3 = {
  question: "vem har barn?",
  a: "Sebbe",
  b: "Margarida",
  c: "Madalena",
  correctAnswer: "Sebbe"
}

let questionArray = [question1, question2, question3]
let input = document.querySelector("#input")
let button = document.querySelector("#button")

button.addEventListener("click", () => {

  console.log("input value: " + input.value)
  console.log(questionArray[currentQuestion].correctAnswer)

  if (input.value == questionArray[currentQuestion].correctAnswer) {
    currentQuestion++
    setQuestion(questionArray[currentQuestion])
  }
})

setQuestion(questionArray[0])