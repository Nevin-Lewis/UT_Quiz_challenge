var start = document.querySelector(".start");
var questions = document.querySelector(".questions");
var hides = document.querySelector(".hide");
var setText = document.querySelector(".next");
var count =0;

const test = [
    ["test 1?", "op1", "op2", "op3", "op4", 1 ],
    ["test 2?", "op1", "op2", "op3", "op4", 2 ],
    ["test 3?", "op1", "op2", "op3", "op4", 3 ]
];
console.log(test.length);

setText.innerHTML = "next";

function startTimer() {
    timer = setInterval(function(){
        timercount--;
        timerElement.textContent= timercount;
        if (timercount >= 0){

        }
    })
};
function setquestions() {
document.getElementsByClassName("questions")[0].children[0].textContent = test[count][0];
    document.getElementsByClassName("questions")[0].children[1].children[0].textContent = test[count][1];
    document.getElementsByClassName("questions")[0].children[1].children[1].textContent = test[count][2];
    document.getElementsByClassName("questions")[0].children[1].children[2].textContent = test[count][2];
    document.getElementsByClassName("questions")[0].children[1].children[3].textContent = test[count][3];}
    ;

   setText.addEventListener("click", function() {
        if (count < test.length -1 ) {
            count ++;
            setquestions();

    }
});

function hide(){
 document.getElementById("welcome").style.display = "none";
 document.getElementsByClassName("questions")[0].style.display = "block";
};
start.addEventListener("click", hide);
start.addEventListener("click", setquestions);