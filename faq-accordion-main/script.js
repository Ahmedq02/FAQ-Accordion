const firstQ = document.getElementById("firstQ");
const firstA = document.getElementById("firstA");

const secondQ = document.getElementById("secondQ");
const secondA = document.getElementById("secondA");

const thirdQ = document.getElementById("thirdQ");
const thirdA = document.getElementById("thirdA");

const fourthQ = document.getElementById("fourthQ");
const fourthA = document.getElementById("fourthA");

let questions = [firstQ, secondQ, thirdQ, fourthQ];
let answers = [firstA, secondA, thirdA, fourthA];

function toggleQA(question) {
    for (let i = 0; i < questions.length; i++) {
        let curQ = questions[i];
        let curA = answers[i];
        if (question === curQ) {
            if (curA.style.display === "none") {
                answers[i].style.display = "block"; 
            }
            else {
                answers[i].style.display = "none";
            }
        }
        else {
            answers[i].style.display = "none";
        }
    }
}

firstQ.addEventListener("click", function() {
    toggleQA(firstQ);
});

secondQ.addEventListener("click", function() {
    toggleQA(secondQ);
});

thirdQ.addEventListener("click", function() {
    toggleQA(thirdQ);
});

fourthQ.addEventListener("click", function() {
    toggleQA(fourthQ);
});