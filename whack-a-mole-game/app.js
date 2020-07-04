const grid = document.querySelector(".grid");
console.log(grid);

window.addEventListener("DOMContentLoaded", () => {
    for (let id = 1; id <= 9; id++) {
        let element = document.createElement("div");
        element.classList.add("square");
        const attribute = document.createAttribute("id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        grid.appendChild(element);
    }
});