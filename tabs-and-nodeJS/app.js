const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(e.target);
    console.log(e.currentTarget);
    if (id) { // !=undefined
        for (let btn of tabBtns) {
            btn.classList.remove("active"); // make all buttons grey
            e.target.classList.add("active"); // make clicked button white
        }
        for (content of contents) {
            content.classList.remove("active"); // remove all content
        }
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})

/* ONLY CHANGES CONTENT, NOT BUTTON PROPERTY.
for (let btn of tabBtns) {
    btn.addEventListener("click", () => {
        btnId = btn.dataset.id;
        for (let content of contents) {
            let id = content.getAttribute("id");
            if (btnId === id) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        }
    })
} */

/* 
    Learnings: 
    1. Difference b/w event target and currentTarget.
    -> Target is used to obtain the info of exact element clicked.
    -> CurrentTarget bubbles up the element info to the most highest parent class.
    2. Use of dataset property to get id of the element.
    3. Making the particular selected tab visible, and the others hidden using simple loop logic.
 */