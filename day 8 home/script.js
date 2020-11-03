class Question {
    constructor (question, a, b, c) {
        this.question = question
        this.a = a
        this.b = b
        this.c = c
    }

    setQuestion () {
        document.getElementById("question").innerHTML = this.question
        document.getElementById("a").innerHTML = this.a
        document.getElementById("b").innerHTML = this.b
        document.getElementById("c").innerHTML = this.c
    }
}

let currentQuestion = 0

let question1 = new Question("When was I born?", "1993", "1700", "1994")
let question2 = new Question("What's my favourite colour?", "blue", "black", "yellow")
let question3 = new Question("What was the name of my first dog?", "Blackie", "Spot", "Scott")
let question4 = new Question("What's the first name of my first school?", "Sonya", "Sandra", "Sylvia")

let myQuestions = [question1, question2, question3, question4]

setQuestion(myQuestions[0])

if (true) {
    currentQuestion++
    setQuestion(questionArray[currentQuestion])
  }