// Questions are taken from: https://triviawhizz.com/trivia-questions/frozen and
// https://www.funtrivia.com/search2_act.cfm?type=quizzes&searchstring=frozen+2&search1=Go%21
// Questions for the quiz are stored below.
//Define an array of quiz questions

const quizQuestions = [
    {
        question: "What fairy tale by Hans Christian Andersen inspired the 2013 animated film 'Frozen'?",
        options: ["The Ice Queen", "The Cold Queen", "The Frozen Queen", "The Snow Queen"],
        correctAnswer: "The Snow Queen"
    },
    {
        question: "Which character is the secondary antagonist of the film 'Frozen'?",
        options: ["Prince Of Weselton", "King Of Weselton", "Duke Of Weselton", "Count Of Weselton"],
        correctAnswer: "Duke Of Weselton"
    },
    {
        question: "Which song in the film ends with the line, 'The cold never bothered me anyway'?",
        options: ["Frozen Heart", "Love Is An Open Door", "Let It Go", "For The First Time In Forever"],
        correctAnswer: "Let It Go"
    },
    {
        question: "Who voiced the role of Queen Iduna in 'Frozen 2'?",
        options: ["Julia Roberts", "Ellen Degeneres", "Mindy Kaling", "Evan Rachel Wood"],
        correctAnswer: "Evan Rachel Wood"
    },
    {
        question: "Which character is the main antagonist of the film 'Frozen'?",
        options: ["Elsa", "Oaken", "Marshmallow", "Hans"],
        correctAnswer: "Hans"
    },
    {
        question: "What is the name of the giant icy snowman guarding Elsa's ice palace?",
        options: ["Fluffy", "Marshmallow", "Cloudy", "Goose"],
        correctAnswer: "Marshmallow"
    },
    {
        question: "What will thaw a frozen heart?",
        options: ["A kiss from a reindeer", "A warm hug", "An act of true love", "A kiss from a troll"],
        correctAnswer: "An act of true love"
    },
    {
        question: "Which character in the film is known for his 'Yoo - hoo! Big summer blowout!' quote?",
        options: ["Kristoff", "Olaf", "Oaken", "Pabbie"],
        correctAnswer: "Oaken"
    },
    {
        question: "Who among the following has voiced Elsa in the movie?",
        options: ["Idina Menzel", "Kristen Bell", "Josh Gad", "Jonathan Groff"],
        correctAnswer: "Idina Menzel"
    },
    {
        question: "What is the name of the apparent leader of the trolls who thaws Anna's frozen head?",
        options: ["Grand Pooba", "Grimlac", "Grossvater", "Grand Pabbie"],
        correctAnswer: "Grand Pabbie"
    },
    {
        question: " Which lullaby does Queen Iduna sing to Elsa and Anna in 'Frozen 2'?",
        options: ["Frozen Heart", "All Is Found", "Show Yourself", "Let It Go"],
        correctAnswer: "All Is Found"
    },
    {
        question: "Which nation inspired the design of the kingdom of Arendelle?",
        options: ["The Netherlands", "Sweden", "Denmark", "Norway"],
        correctAnswer: "Norway"
    },
    {
        question: "What is the name of the wind spirit in 'Frozen 2'?",
        options: ["Gale", "Gus", "Zephyr", "Samantha"],
        correctAnswer: "Gale"
    },
    {
        question: "Which Disney princess makes a cameo appearance at Elsa's coronation?",
        options: ["Tiana", "Rapunzel", "Ariel", "Belle"],
        correctAnswer: "Rapunzel"
    },
    {
        question: "Which magical river is originally believed to be a myth in 'Frozen 2'?",
        options: ["Iardanus", "Vadgelmir", "Ahtohallan", "Styx"],
        correctAnswer: "Ahtohallan"
    }
];


// Global variables to track the quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

// Initially hide the timer container
document.getElementById("timer-container").style.display = "none";

/**
 * On clicking the Lets get Started button, function will be called to start the quiz
 */
function startQuiz() {
    //Hide the start button and other content on the main quiz page and display first question
    // Display the timer when it starts
    document.getElementById("timer-container").style.display = "block";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("quiz-heading").style.display = "none";
    document.getElementById("quiz-content").style.display = "none";
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    //Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    // Display current question
    questionText.innerHTML = currentQuestion.question;

    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        //Add click event listener to check the answer
        button.addEventListener("click", function () {
            checkAnswer(option);
        });
    });
}

//Function for checking the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    //Check if the selected answer is correct 
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    //Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}



//Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);






