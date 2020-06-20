//using selectors inside the element

const questions = document.querySelectorAll(".question");
for (let question of questions) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", () => {
        for (let q of questions) {
            if (q !== question) {
                q.classList.remove("show-text");
            }
        }
        question.classList.toggle("show-text");
    })
}

// traversing the dom

/* const questionBtn = document.querySelectorAll(".question-btn");
console.log(questionBtn);
for (let btn of questionBtn) {
    btn.addEventListener("click", (e) => {
        //e.currentTarget is as same as btn
        const question = e.currentTarget.parentElement.parentElement; // btn.parentElement.parentElement
        question.classList.toggle("show-text");
    })
} */