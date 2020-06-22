const videoContainer = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click", () => {
    if (!switchBtn.classList.contains("slide")) {
        switchBtn.classList.add("slide");
        videoContainer.pause();
    } else {
        switchBtn.classList.remove("slide");
        videoContainer.play();

    }
    console.log(switchBtn.classList);
})

// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})

/* 
    Learnings: 
    1. video tags and its properties in html
    2. play() and pause() methods for handling video events in JS
    3. Difference b/w DOMContentLoaded & load event.
    4. Use of z.index property in CSS
*/