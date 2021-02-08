const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

function handleDragStart() {
    this.className += " hold";
    setTimeout(() => this.className = "invisible", 0);
}

function handleDragEnd() {
    this.className = "fill";
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    this.className = "empty";
    this.append(fill);
}

function handleDragLeave(event) {
    this.className = "empty";
}

function handleDragEnter(event) {
    event.preventDefault();
    this.className += " hovered";
}

function init() {
    fill.addEventListener("dragstart", handleDragStart);
    fill.addEventListener("dragend", handleDragEnd);
    for(empty of empties) {
        empty.addEventListener("dragover", handleDragOver);
        empty.addEventListener("drop", handleDrop);
        empty.addEventListener("dragleave", handleDragLeave);
        empty.addEventListener("dragenter", handleDragEnter);
    }

}

init();