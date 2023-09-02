// Getting the DOM elements
//Defining variables

let startButton = document.getElementById('start-button');
let startPage = document.getElementById('start-container');
let userNameInput = document.getElementById('user-name');


//Validating and Getting Username
/**
 * Function will check for the user has enter username before starting the quiz and 
 * the name is valid with more than 2 characters with no blank spaces or numbers. 
 * The username will be used to display final score on quiz completion.
 */

let user = userNameInput;
let validMessageEmpty = "Enter a valid username without spaces and numbers";
let validCharacterMessage = "Username should contain more than 3 characters";

//Username Validation
function checkUserName() {

    var messageLetters = /^[A-Za-z]+$/;

    if (!user.value.match(messageLetters)) {
        message.innerHTML = validMessageEmpty;
    } else if (user.value.length <= Number(3)) {
        message.innerHTML = validCharacterMessage;
    } else if (user.value.length >= Number(3)) {
        startQuiz();
    }
}

//Event Listener for starting quiz
startButton.onclick = () => {
    checkUserName();
};
