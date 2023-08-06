class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {

        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if(this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
 }

 class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
 }

 // Display question
 const displayQuestion = () => {
    if(quiz.isEnded()) {
        showScores();
    } else {
        //show question
        let questionElement = document.getElementById('question');
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById('choice' + i);
            choiceElement.innerHTML = choices[i];
            guess("btn-" + i, choices[i])
        }

        showProgress();
    }
 };

 // guess function
 function guess(id, userGuess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(userGuess);
        displayQuestion();
    }
 }

 // show quiz progress
 const showProgress = () => {
    let currentQuestionNumber = quiz.questionIndex + 1
    let progressElement = document.getElementById('progress');
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
 }

 // show score
 const showScores = () => {
    let quizEndHTML = 
    `
    <h1>Quiz Completed</h1>
    <h2 id="score">You scored: ${quiz.score} of ${quiz.question.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
 }

 //create quiz questions
 let questions = [
    new Question(
        "Hyper Text Markup Language Stands for?",
        ['JQuery','XHTML','CSS','HTML'],
        'HTML'
    ),
    new Question(
        "Cascading style sheet stands for?",
        ['XML',' CSS','JQuery','HTML'],
        'CSS'
    )
 ]

 let quiz = new Quiz(questions);

 // display question
 displayQuestion();