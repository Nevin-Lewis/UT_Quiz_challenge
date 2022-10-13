var start = document.querySelector(".start");
var questions = document.querySelector(".questions");
var hides = document.querySelector(".hide");
var setText = document.querySelector(".next");
var timerEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var saved = document.querySelector(".save_close");
var names = document.getElementById("name_input");
var scoretrack = document.querySelector("#scores");
var closes = document.querySelector(".closes");
var resets = document.querySelector(".reset");
var timercount = 60;
var count =0;
var score = 0;
var highScore = {
    name: [],
    scores: [],};
const test = [
    {Question: "Which of the following indicates that A is equivalent to B in both value and type", answers: {A:"A === B", B:"A = B", C:"A == B", D:"A != B"}, correctAnswer:'A'},
    {Question: "What is that starting index value of an Array", answers: {A:"1", B:"2", C:"3", D:"0"}, correctAnswer:'D'},
    {Question: "What is an element ID identifier?", answers: {A:"@", B:".", C:"#", D:"&"}, correctAnswer:'C'},
    {Question: "What element do you need to add before using a function to edit style elements?", answers: {A:"(.)", B:"none", C:".css", D:".style"}, correctAnswer:'D'},
    {Question: "Where should the link to .JS be in HTML?", answers: {A:"At the top", B:"At the bottom", C:"Anywhere", D:"In the body"}, correctAnswer:'B'},
    {Question: "What phrase will take an if statement to a second option to see if its true?", answers: {A:"else if", B:"next", C:"if false", D:"else"}, correctAnswer:'B'},
    {Question: "What does querry selector return", answers: {A:"an element", B:"a list", C:"an array", D:"a function"}, correctAnswer:'A'},
    {Question: "How do you add an a function that occurs after someone does an action", answers: {A:"add a function", B:"add a loop", C:"add an event listener", D:"its impossible"}, correctAnswer:'C'},
    {Question: "What phrase will add the element to the end of an array", answers: {A:".add", B:".slice", C:".push", D:".array"}, correctAnswer:'C'},
    {Question: "What text will search for the next subsection of an object", answers: {A:".nextElement", B:".children", C:".subsect", D:".indent"}, correctAnswer:'B'},
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
    init();
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

scores();
document.getElementById("MC").reset();
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
    document.getElementsByClassName("scores")[0].innerHTML = Math.max.apply(null, highScore.scores);
        }
    else {
        highScore = {
            name: [],
            scores:[],};
    }
    
        
}
function storeScore() {
    highScore.name.push(names.value);
    highScore.scores.push(score);
    for (let i=0; i <5; i++){
        if (highScore.name[i] !== undefined){
        document.getElementById("scores").children[i].textContent = highScore.name[i] +" with a score of " + highScore.scores[i]}
    else {
        document.getElementById("scores").children[i].style.textContent = "";
        document.getElementById("scores").children[i].style.listStyleType = "none";
    }

    }
    // highScore.scores.sort((a, b) => (a > b) ? 1 : -1);  document.getElementsByClassName("save_score")[0].style.display = "none";
    document.getElementsByClassName("save_score")[0].style.display = "none";
    document.getElementsByClassName("highscore")[0].style.display = "block"; 
    localStorage.setItem("highScore", JSON.stringify(highScore));};
   function reset() {
    var highScore = {
    name: [],
    scores: [],};
    localStorage.setItem("highScore", JSON.stringify(highScore));
    for (let i=0; i <5; i++){
        document.getElementById("scores").children[i].textContent = "";
        document.getElementById("scores").children[i].style.listStyleType = "none";}
   }
   
function close(){
    window.location.reload()
};
start.addEventListener("click", hide);
start.addEventListener("click", setquestions);  
start.addEventListener("click", startTimer);
setText.addEventListener("click", Start);
saved.addEventListener('click', storeScore);
resets.addEventListener('click', reset);
closes.addEventListener('click', close);
