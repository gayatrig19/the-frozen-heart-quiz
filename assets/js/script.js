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
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval;

// Initially hide the timer, question-number and retry-button container to not to show up on main page
document.getElementById("timer-container").style.display = "none";
document.getElementById("question-number").style.display = "none";
document.getElementById("retry-button").style.display = "none";


/**
 * On clicking the start quiz button, function startQuiz() will be called to start the quiz
 */
function startQuiz() {
    //Hide the start button and other content on the main quiz page and display first question
    // Display the timer and question count when the quiz starts
    document.getElementById("timer-container").style.display = "block";
    document.getElementById("question-number").style.display = "block";
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


    // Increment the question number
    incrementQuestionNumber();

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

// Function to increment the question number
function incrementQuestionNumber() {
    const currentQuestionNumber = document.getElementById("current-question");
    currentQuestionNumber.textContent = currentQuestionIndex + 1; // Add 1 to display the current question index

    const totalQuestions = document.getElementById("total-questions");
    totalQuestions.textContent = quizQuestions.length; // Set the total number of questions
}

//Function for checking the selected answer 
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const answerButtons = document.getElementById("answer-buttons");
    const buttons = answerButtons.querySelectorAll("button");

    // Function to check correct and wrong answers and display both with respective background colors
    // green for correct and red for incorrect answer
    //Both buttons will be highlighted at the same time
    buttons.forEach(button => {
        button.disabled = true;
        // If answer is correct the button background color will change to green
        if (button.innerText === currentQuestion.correctAnswer) {
            button.style.backgroundColor = "green";
            // For incorrect answer the button will display red
        } else if (button.innerText === selectedOption) {
            button.style.backgroundColor = "red";
        }
    });

    //Check if the selected answer is correct 
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    //Move to the next question or end the quiz if all quiz questions are answered
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        //Delay for a moment and then move to the next question
        setTimeout(() => {
            displayQuestion();
        }, 1500);

    } else {
        // Delay for a moment before ending the quiz and displaying the final score
        setTimeout(() => {
            endQuiz();
        }, 1500);
    }
}

//Function to start the timer
function startTimer() {
    timerInterval = setInterval(function () {
        if (timerSeconds === 59) {
            //If seconds reach 59, increment minutes and reset seconds to 0
            timerMinutes++;
            timerSeconds = 0;
        } else {
            //Increment seconds
            timerSeconds++;
        }
        const formattedMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
        const formattedSeconds = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
        document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;

    }, 1000);
}

// Function to end the quiz game
function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
    document.getElementById("timer-container").style.display = "none";

    // Calculate the score percentage
    const scorePercentage = Math.round((score / quizQuestions.length) * 100);

    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
    <h2>Quiz Completed</h2>
    <p>Congratulations! You answered ${score} out of ${quizQuestions.length} questions correctly
     in ${timerMinutes} mins : ${timerSeconds} secs</p>
    <p>Your score percentage is ${scorePercentage}%</p>
    `;

    // Show the "Retry Quiz" button 
    document.getElementById("retry-button").style.display = "block";
}

//Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);

// Function to retry the quiz by reloading the page
function retryQuiz() {
    window.location.reload();
}

//Add event listener to the "Retry Quiz" button
document.getElementById("retry-button").addEventListener("click", retryQuiz);






