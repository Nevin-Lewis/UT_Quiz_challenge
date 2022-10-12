var start = document.querySelector(".start");
var questions = document.querySelector(".questions");
var hides = document.querySelector(".hide");
var setText = document.querySelector(".next");
var timerEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var saved = document.querySelector(".save_close");
var names = document.getElementById("name_input");
var scoretrack = document.querySelector("#scores");

var timercount = 60;
var count =0;
var score = 0;
var highScore = {
    name: [],
    scores: [],};
const test = [
    {Question: "Which of the following indicates that A is equivalent to B in both value and type", answers: {A:"A === B", B:"A = B", C:"A == B", D:"A != B"}, correctAnswer:'A'},
    {Question: "What is that starting index value of an Array", answers: {A:"1", B:"o2", C:"3", D:"0"}, correctAnswer:'D'},
    {Question: "What is an element ID identifier?", answers: {A:"@", B:".", C:"#", D:"&"}, correctAnswer:'C'},
    {Question: "What element do you need to add before using a function to edit style elements?", answers: {A:".", B:"none", C:".css", D:".style"}, correctAnswer:'D'},
    {Question: "Where should the link to .JS be in HTML?", answers: {A:"At the top", B:"At the bottom", C:"Anywhere", D:"In the body"}, correctAnswer:'B'},
    {Question: "test 6?", answers: {A:"op1", B:"op2", C:"op3", D:"op4"}, correctAnswer:'B'},
];
var correct_Answer = test.map(function (el) { return el.correctAnswer;});

function hide(){
    document.getElementById("welcome").style.display = "none";
    document.getElementsByClassName("questions")[0].style.display = "block";
   };

function startTimer() {
    timer = setInterval(function(){
        timercount--;
        timerEl.textContent= timercount;
        if (timercount <= 0){
            clearInterval(timer);
            gameover();

        }
    },1000)
};
function setquestions() {
    scores();
document.getElementsByClassName("questions")[0].children[0].textContent = test[count].Question
    document.getElementsByName("Multiple_choice")[0].textContent =`A. ${test[count].answers.A}`;
    document.getElementsByName("Multiple_choice")[1].textContent =`B. ${test[count].answers.B}`;
    document.getElementsByName("Multiple_choice")[2].textContent =`C. ${test[count].answers.C}`;
    document.getElementsByName("Multiple_choice")[3].textContent =`D. ${test[count].answers.D}`;};
    function scores () {
        scoreEl.textContent = score;}

function Start(event){
event.preventDefault();
init();
var user_Answer = document.querySelector('input[type=radio]:checked').value;
if (user_Answer == correct_Answer[count]){
    score += 10;}
else if (user_Answer != correct_Answer[count] && timercount >10){
    timercount -= 10;}
else if (user_Answer != correct_Answer[count] && timercount <=10){
    gameover();
}
if (count < test.length -2 ) {
        count ++;
        setquestions();
}
else if (count == test.length-2){
    setText.innerHTML = "Finish";
    count ++;
    setquestions();
    document.getElementsByClassName("next")[0].type = "submit";
}   
else if (count == test.length -1) {
    gameover();

}
document.getElementById("MC").reset();
scores();
};
function gameover() {
    document.getElementsByClassName('score')[1].textContent= score
    document.getElementsByClassName("questions")[0].style.display = "none";
    document.getElementsByClassName("save_score")[0].style.display = "block";
   
}
function init() {
    var save_highScore = JSON.parse(localStorage.getItem("highScore"));
    if (save_highScore !== null) {
    highScore = save_highScore;
        }
    else {
        highScore = {
            name: [],
            scores: [],};
    }
    document.getElementsByClassName("scores")[0].innerHTML = Math.max.apply(null, highScore.scores);
        
}
function storeScore() {
    highScore.name.push(names.value);
    highScore.scores.push(score)
    highScore.scores.sort((a, b) => (a > b) ? 1 : -1);
    localStorage.setItem("highScore", JSON.stringify(highScore));
  };
  document.getElementsByClassName("save_score")[0].style.display = "none";
//   document.getElementsByClassName("highscore")[0].style.display = "block";
 
init()


start.addEventListener("click", hide);
start.addEventListener("click", setquestions);  
start.addEventListener("click", startTimer);
setText.addEventListener("click", Start);
saved.addEventListener('click', storeScore);

