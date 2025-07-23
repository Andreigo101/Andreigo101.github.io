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
    hideall(); //we don't know which page is shown, so hideall
    page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
    hideall(); //we don't know which page is shown, so hideall
    page3.style.display = "block";
});
hideall(); //call hideall function to hide all pages

/*JS for hamMenu */
//get the "open menu" button (meant for hamIcon)
const hamBtn = document.querySelector("#hamIcon");
//connect hamBtn click to toggleMenus function
hamBtn.addEventListener("click", toggleMenus);
//get the menuItem list
const menuItemsList = document.querySelector("nav ul");
/*toggle, just like light switch, off becomes on, on becomes off*/
/*if menu is shown, hide it, if hidden, show it*/
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
const popAudio = new Audio("audio/popsound.mp3")
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

const btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", CheckAns);
const scorebox = document.querySelector("#scorebox");
var q1, q2, score = 0;
function CheckAns() {
    score = 0; //reset score to 0, check ans and give score if correct
    CheckOneAns(1, "Tyrant lizard king");
    CheckOneAns(2, "About 12 meters");
    CheckOneAns(3, "Sue");
    CheckOneAns(4, "Tarbosaurus");
    scorebox.innerHTML = "Score:" + score;
}

function CheckOneAns(qNo, CorrAns) {
    //read the value of the selected radio button for q4
    cssSel = "input[name='q" + qNo + "']:checked";
    qTemp = document.querySelector(cssSel).value;
    console.log(qTemp); //check q4 value retrieved
    if (qTemp == CorrAns) score++;
}

document.querySelectorAll('.dino-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const node = btn.closest('.dino-node');
        node.classList.toggle('active');
    });
});
