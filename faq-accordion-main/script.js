// define the sections for the questions and answers
const firstQA = document.getElementById("firstQA");
const secondQA = document.getElementById("secondQA");
const thirdQA = document.getElementById("thirdQA");
const fourthQA = document.getElementById("fourthQA");

const qASections = [firstQA, secondQA, thirdQA, fourthQA];

function toggleQA(questionSection) {
    const question = questionSection.querySelector(".toggle");

    for (let i = 0; i < qASections.length; i++) {

        let curQ = qASections[i].querySelector(".toggle");
        let curA = qASections[i].querySelector("p");
        let curMinus = qASections[i].querySelector(".minus");
        let curPlus = qASections[i].querySelector(".plus");

        // modify the clicked question to reveal or hide
        if (question === curQ) {
            if (curA.style.display === "none") {
                curA.style.display = "block";
                curMinus.style.display = "block";
                curPlus.style.display = "none";
            }
            else {
                curA.style.display = "none";
                curMinus.style.display = "none";
                curPlus.style.display = "block";
            }
        }
        // hide all other questions
        else {
            curA.style.display = "none";
            curMinus.style.display = "none";
            curPlus.style.display = "block";
        }
    }
}

firstQA.querySelector(".toggle").addEventListener("click", function() {
    toggleQA(firstQA);
});

secondQA.querySelector(".toggle").addEventListener("click", function() {
    toggleQA(secondQA);
});

thirdQA.querySelector(".toggle").addEventListener("click", function() {
    toggleQA(thirdQA);
});

fourthQA.querySelector(".toggle").addEventListener("click", function() {
    toggleQA(fourthQA);
});