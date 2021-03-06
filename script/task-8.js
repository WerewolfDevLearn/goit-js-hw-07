const btnCreate = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const inputNumber = document.querySelector("#controls input");
const outputBox = document.querySelector("#boxes");

let amount = 0;
// inputNumber.addEventListener("input", getInputValue);
btnCreate.addEventListener("click", () => {
  createBoxes(amount);
});

btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  // console.log("infunction", `${amount}`);
  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("container");
  amount = inputNumber.value;

  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.style.backgroundColor = colorGenerator();
    item.style.width = `${30 + 10 * i}px`;
    item.style.height = `${30 + 10 * i}px`;
    itemsContainer.append(item);
  }
  outputBox.append(itemsContainer);
  return outputBox;
}

function destroyBoxes() {
  const container = document.querySelector("div.container");
  container.remove();
}

function colorGenerator() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// function getInputValue() {
//   amount = inputNumber.value;
//   console.log(amount);
//   return amount;
// }
