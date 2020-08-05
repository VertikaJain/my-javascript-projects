import { click, width } from "./game.js";

// implementing recursion to display total value of neighbouring boxes of the clicked box
export let checkBox = box => {
    console.log(box);
    let id = parseInt(box.id);
    const isLeftEdge = (id % width === 0);
    const isRightEdge = (id % width === width - 1);
    setTimeout(() => {
        if (id > 0 && !isLeftEdge) click(document.getElementById(id - 1)); //display the left of clicked box
        if (!isRightEdge) click(document.getElementById(id + 1)); //display the left of clicked box
        if (id > 9) click(document.getElementById(id - width)); //display the north of clicked box
        if (id < 90) click(document.getElementById(id + width)); //display the south of clicked box
        if (id > 9 && !isRightEdge) click(document.getElementById(id + 1 - width)); //display the north-east of clicked box
        if (id > 9 && !isLeftEdge) click(document.getElementById(id - 1 - width)); //display the north-west of clicked box
        if (id < 90 && !isLeftEdge) click(document.getElementById(id - 1 + width)); //display the south-west of clicked box
        if (id < 90 && !isRightEdge) click(document.getElementById(id + 1 + width)); //display the south-west of clicked box
    }, 10);
}