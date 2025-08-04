//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
function hideall() { //function to hide all pages
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
    hideall(); 
    page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
    hideall(); 
    page3.style.display = "block";
});
hideall(); //call hideall function to hide all pages

/*JS for hamMenu */
//get the "open menu" button (for hamIcon)
const hamBtn = document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click", toggleMenus);
//get the menuItem list
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() {
    //if menuItemsList dont have the class "menuShow", add the class, else remove class
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
        menuItemsList.classList.remove("menuShow");
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
        menuItemsList.classList.add("menuShow");
    }
}

const btnSubmit = document.querySelector("#btnSubmit");
const btnResetGame = document.querySelector("#btnResetGame");
const scorebox = document.querySelector("#scorebox");

const trexheadId = document.getElementById("trexheadId");
function GetRandom(min, max) {
    //this will select a number between min and max
    return Math.round(Math.random() * (max - min)) + min;
}
function MoveTrexhead() {
    trexheadId.style.left = GetRandom(0, 300) + "px";
    trexheadId.style.top = GetRandom(0, 300) + "px";
}
var movetrexItvId = setInterval(MoveTrexhead, 700);

const scoreBox = document.getElementById("scorebox2");
const popAudio = new Audio("audio/popsound.mp3");
var score = 0; //to track how many clicks
function trexheadCatch() {
    //increases score after clicking
    score++;
    //update html scorebox
    scoreBox.innerHTML = "Score: " + score;
    popAudio.play();
}
//link t-rex head to mouseclick to trexheadCatch function
trexheadId.addEventListener("click", trexheadCatch);

btnResetGame.addEventListener("click", function () {
    score = 0;
    scoreBox.innerHTML = "Score: 0";
    // Stop previous movement
    clearInterval(movetrexItvId);
    // Restart movement
    movetrexItvId = setInterval(MoveTrexhead, 700);
});

const btnReset = document.querySelector("#btnReset");

// Event listener for Submit Quiz
btnSubmit.addEventListener("click", CheckAns);

// Event listener for Reset Quiz
btnReset.addEventListener("click", ResetQuiz);

let quizScore = 0;

function CheckAns() {
    quizScore = 0;
    CheckOneAns(1, "Tyrant lizard king");
    CheckOneAns(2, "About 12 meters");
    CheckOneAns(3, "Sue");
    CheckOneAns(4, "Tarbosaurus");
    scorebox.innerHTML = "Score: " + quizScore; //update score display
}

function CheckOneAns(qNo, CorrAns) {
    const cssSel = "input[name='q" + qNo + "']:checked";
    const selected = document.querySelector(cssSel);
    if (!selected) return; // skip if nothing selected
    if (selected.value == CorrAns) quizScore++; // increment if correct
}

function ResetQuiz() {
    // Uncheck all radio buttons
    const allRadios = document.querySelectorAll("input[type='radio']");
    allRadios.forEach(function (r) {
        r.checked=false;
    });

    // Clear score text
    scorebox.innerHTML = "Not submitted"; // reset score display
    
    // Reset score variable
    quizScore = 0;
}

const dinoToggles = document.querySelectorAll('.dino-toggle');
dinoToggles.forEach(function (btn) {
    btn.addEventListener('click', function() {
        const node = btn.closest('.dino-node');
        node.classList.toggle('active');  // show or hide dino info
    });
});

const sprite = document.getElementById("trexSprite");
const factContainer = document.getElementById("factBoxContainer");

// toggle fact box visibility when sprite is clicked
sprite.addEventListener("click", function() {
   factContainer.classList.toggle("show");
});

