const fontSizeControl = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  textOutput.style.fontSize = fontSize;
});