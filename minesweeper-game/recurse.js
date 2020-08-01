const width = 10;

export let checkBox = box => {
    let id = parseInt(box.dataset.id);
    const isLeftEdge = (id % width === 0);
    const isRightEdge = (id % width === width - 1);
    setTimeout(() => {

    }, 10)
}