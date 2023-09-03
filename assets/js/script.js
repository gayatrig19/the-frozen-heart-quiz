// Getting the DOM elements
//Defining variables

let startButton = document.getElementById('start-button');
let startPage = document.getElementById('start-container');
let userNameInput = document.getElementById('user-name');


//Validating and Getting Username
/**
 * Function will check for the user has enter a username before starting the quiz and 
 * the name is valid with more than 3 characters with no blank spaces. 
 * The username will be used to display final score on quiz completion.
 */

let user = userNameInput;
let validMessageEmpty = "Please enter a valid name without spaces";
let validCharacterMessage = "Username should contain more than 3 characters";

//Username Validation
function validateUserName() {

    // Code for username validation credit: https://www.youtube.com/watch?v=1iw5sdQAxAY and
    // https://stackoverflow.com/questions/9628879/javascript-regex-username-validation

    var messageLetters = /^[A-Za-z0-9]+$/;
    // Checks for empty spaces
    if (!user.value.match(messageLetters)) {
        message.innerHTML = validMessageEmpty;
        message.style.color = "red";
        message.style.weight = "bold";
        //checks if username entered is more than 3 characters, if true validates and starts quiz 
    } else if (user.value.length <= Number(3)) {
        message.innerHTML = validCharacterMessage;
        message.style.color = "red";
        message.style.weight = "bold";
    } else if (user.value.length >= Number(3)) {
        startQuiz();
    }
}

//Event Listener for starting quiz
startButton.onclick = () => {
    validateUserName();
};
