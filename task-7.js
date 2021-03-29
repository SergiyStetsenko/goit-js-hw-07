
const inputControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");
inputControl.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}
 
