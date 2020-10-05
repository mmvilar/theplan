function setQuestion(questionObject) {
  document.querySelector('#question').innerHTML = questionObject.question
  document.querySelector('#a').innerHTML = "a. " + questionObject.a
  document.querySelector('#b').innerHTML = "b. " + questionObject.b
  document.querySelector('#c').innerHTML = "c. " + questionObject.c

  document.querySelector("#input-a").value = questionObject.a
  document.querySelector("#input-b").value = questionObject.b
  document.querySelector("#input-c").value = questionObject.c
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

let questionArray = [question1, question2]
let button = document.querySelector("#button")
setQuestion(questionArray[0])

button.addEventListener("click", () => {
  let elRadioButton = document.getElementsByClassName("radio-button")
  for (let i = 0; i < elRadioButton.length; i++) {
    if (elRadioButton[i].checked === true) {
      console.log(elRadioButton[i].value == questionArray[currentQuestion].correctAnswer)
      if (elRadioButton[i].value == questionArray[currentQuestion].correctAnswer) {
        console.log("well done")
      } else { console.log("sorry") }

    }
  }

  if (true) {
    currentQuestion++
    setQuestion(questionArray[currentQuestion])
  }
})

