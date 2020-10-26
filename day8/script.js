class Question {
  constructor(question, a, b, c) {
    this.question = question
    this.a = a
    this.b = b
    this.c = c
  }

  setQuestion() {
    document.getElementById('question').innerHTML = this.question
    document.getElementById('a').innerHTML = this.a
    document.getElementById('b').innerHTML = this.b
    document.getElementById('c').innerHTML = this.c
  }
}

let question1 = new Question("How are you?", "fine", "terrible", "can't even speak rn")
let question2 = new Question("What's the colour of the sky?", "blue", "green", "pink")

let myQuestions = [question1, question2]



