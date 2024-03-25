let offsetX, offsetY, draggedElement;

document.addEventListener("dragstart", function (event) {
  draggedElement = event.target;
  offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
  offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
});

document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (draggedElement) {
    draggedElement.style.left = event.clientX - offsetX + "px";
    draggedElement.style.top = event.clientY - offsetY + "px";
  }
});

document.addEventListener("dragend", function () {
  draggedElement = null;
  offsetX = 0;
  offsetY = 0;
});