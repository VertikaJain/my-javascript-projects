const grid = document.querySelector(".grid");
const boxes = document.querySelectorAll(".grid div");
const currentPlayer = document.getElementById("current-player");
const result = document.getElementById("result");
let currPlayer = parseInt(currentPlayer.textContent);

window.addEventListener("DOMContentLoaded", () => {
    createBoard();
    onBoxClick();
    // checkBoard();
})

// method to create game board dynamically
createBoard = () => {
    // adding grid elements dynamically => 6x7=42
    let id = 0;
    for (; id < 42; id++) {
        let element = document.createElement("div");
        const attribute = document.createAttribute("data-id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        grid.appendChild(element);
    }
    for (; id < 49; id++) {
        let element = document.createElement("div");
        element.classList.add("taken");
        const attribute = document.createAttribute("data-id");
        attribute.value = id;
        element.setAttributeNode(attribute);
        grid.appendChild(element);
    }
}

// method to check clicked box & assign taken class based on specific conditions.
onBoxClick = () => {
    const boxes = document.querySelectorAll(".grid div");
    for (let box of boxes) {
        box.addEventListener("click", (event) => {
            let id = parseInt(event.target.dataset.id);
            /* 
            Condition 1: To check if the box below the clicked one is taken.
            Condition 2: If the clicked box is already taken, then avoid re-click.
            */
            if (boxes[id + 7].classList.contains("taken") && !boxes[id].classList.contains("taken")) {
                if (currPlayer === 1) {
                    box.classList.add("taken");
                    box.classList.add("player-one");

                    currPlayer = 2;
                    currentPlayer.textContent = 2;
                } else if (currPlayer === 2) {
                    box.classList.add("taken");
                    box.classList.add("player-two");
                    currPlayer = 1;
                    currentPlayer.textContent = 1;
                }
            } else {
                console.log("unreachable box!"); // ALERT HERE
            }
            checkBoard();
        })
    }
}

// method to check if 4 connected balls are clicked in a row/column
checkBoard = () => {

}