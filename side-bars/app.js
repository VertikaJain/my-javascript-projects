const sidebarToggle = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

sidebarToggle.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar"); // or use remove() in this case
})