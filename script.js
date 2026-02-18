let incButton = document.getElementById("inc");
let decButton = document.getElementById("dec");
let resetButton = document.getElementById("reset");
let box = document.getElementById("box");
let value = 0;
const MAX = 10;
const MIN = 0;

function updateButtons() {
  incButton.disabled = value >= MAX;
  decButton.disabled = value <= MIN;
}

function updateUi() {
  box.textContent = value;
  box.style.color = value === 0 ? "gray" : "green";
}
incButton.addEventListener("click", () => {
  if (value < MAX) value++;
  updateButtons();
  updateUi();
});
decButton.addEventListener("click", () => {
  if (value > MIN) value--;
  updateButtons();
  updateUi();
});
resetButton.addEventListener("click", () => {
  value = 0;
  updateButtons();
  updateUi();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "+") incButton.click();
  if (e.key === "-") decButton.click();
  if (e.key.toLowerCase() === "r") resetButton.click();
});
updateButtons();
updateUi();
