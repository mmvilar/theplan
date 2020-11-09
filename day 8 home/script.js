class Question {
    constructor(question, a, b, c, correctAnswer) {
        this.question = question
        this.a = a
        this.b = b
        this.c = c
        this.correctAnswer = correctAnswer
    }

    setQuestion() {
        document.getElementById("question").innerHTML = this.question
        document.getElementById("a").innerHTML = this.a
        document.getElementById("b").innerHTML = this.b
        document.getElementById("c").innerHTML = this.c
    }
}

let currentQuestion = 0
let points = 0
let question1 = new Question("When was I born?", "1993", "1700", "1994", "1994")
let question2 = new Question("What's my favourite colour?", "blue", "black", "yellow", "yellow")
let question3 = new Question("What was the name of my first dog?", "Blackie", "Spot", "Scott", "Scott")
let question4 = new Question("What's the first name of my first school?", "Sonya", "Sandra", "Sylvia", "Sylvia")
let myQuestions = [question1, question2, question3, question4]

myQuestions[0].setQuestion()

let elInput = document.getElementById("input")
let elButton = document.getElementById("submit")

elButton.addEventListener("click", () => {
    currentQuestion++

    if (myQuestions[currentQuestion]) {

        console.log(myQuestions[currentQuestion - 1].correctAnswer)
        if (elInput.value == myQuestions[currentQuestion - 1].correctAnswer) {
            points++
            console.log(points)
        }
        myQuestions[currentQuestion].setQuestion()
    } else {
        new Question("Well done, you have", `${points}/${myQuestions.length} points`, " ", " ", "").setQuestion()
    }
}) 
