// The first, is code that will be executed when the page has  finished loading. And the second kind, which is  
// going to be part of the event handler code of the  first one, will be listening for button clicks


// // Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});


/**
 * The main game "loop", called when the scpript is first loaded
 * and after the user's answer has been processed
 */
function runGame () {

    //creates two random numbers between 1 and 25
    let num1 = Math.floor(MAth.random() * 25) + 1;
    let num2 = Math.floor(MAth.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}