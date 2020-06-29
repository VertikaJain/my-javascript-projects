const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counterIndex = 0;
for (let slide of slides) {
    slide.style.left = `${counterIndex * 100}%`;
    counterIndex++;
}

/* slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
}) */

let counter = 0;
prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
})
nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
})

carousel = () => {
    /*  ---- SET UP 1: IF YOU WANT TO LOOP FROM THE LAST SLIDE TO 1ST AND VISE VERSA -----
        if (counter === slides.length) {
            counter = 0;
        }
        if (counter < 0) {
            counter = slides.length - 1;
        } */

    // -----SET UP 2: HIDING THE NEXT BUTTON UPON REACHING OF LAST SLIDE & ALSO ALTERING THE PREV BUTTON SIMILARLY. -----
    if (counter === slides.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    for (let slide of slides) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    }
}
prevBtn.style.display = "none";