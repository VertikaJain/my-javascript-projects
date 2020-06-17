count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// console.log(btns);

for (let btn of btns) {
    // console.log(btn);
    btn.addEventListener('click', (event) => {
        const className = event.currentTarget.classList;
        if (className.contains('decrease')) {
            count--;
        } else if (className.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
        value.textContent = count;
    })
}


/* Using buttons separately.
const btn_decrease = document.querySelector(".btn.decrease");
const btn_reset = document.querySelector(".btn.reset");
const btn_increase = document.querySelector(".btn.increase");
btn_decrease.addEventListener('click', () => {
    count--;
    value.textContent = count;
})
btn_increase.addEventListener('click', () => {
    count++;
    value.textContent = count;
})
btn_reset.addEventListener('click', () => {
    count = 0;
    value.textContent = count;
}) */