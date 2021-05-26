const input = document.querySelector(".input-field");
const plus = document.querySelector(".plus-button");
const checkList = document.querySelector(".check-list");
plus.disabled = true;
let array = [];
let maxItem = document.createElement("div");
maxItem.className = "max-item";
maxItem.innerHTML = "Maximum item per list are created";

function myFunction() {
  plus.disabled = !true;
}

function addAction() {
  let newLine = document.createElement("div");
  newLine.className = "new-line";
  newLine.innerHTML = `<button class="check-button"></button>
  <div class="new-action">${input.value}</div>
  <button class="delete-button"></button>`;
  newLine.setAttribute("draggable", true);
  checkList.append(newLine);
  array.push(newLine);
  input.value = "";
  plus.disabled = true;
  action();
}
plus.addEventListener("click", addAction);

function action() {
  const checkButton = document.querySelectorAll(".check-button");
  const deleteButton = document.querySelectorAll(".delete-button");
  const newLine = document.querySelectorAll(".new-line");
  const header = document.querySelector(".header-name");
  if (newLine.length > 9) {
    input.disabled = true;
    header.append(maxItem);
    maxItem.style = "display: block";
  }
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", () => {
      newLine[i].remove();
      input.disabled = !true;
      maxItem.style = "display: none";
    });
  }
  for (let i = 0; i < checkButton.length; i++) {
    checkButton[i].addEventListener("click", () => {
      checkButton[i].style =
        "background: url(assets/img/baseline_check_box_black_18dp.png); background-size: 45px; background-position: center";
    });
  }
}
const taskElements = document.querySelectorAll(".new-line");

checkList.addEventListener("dragstart", (evt) => {
  evt.target.classList.add(`selected`);
});
checkList.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

checkList.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  const activeElement = checkList.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable =
    activeElement !== currentElement &&
    currentElement.classList.contains(`new-line`);
  if (!isMoveable) {
    return;
  }
  const nextElement =
    currentElement === activeElement.nextElementSibling
      ? currentElement.nextElementSibling
      : currentElement;
  checkList.insertBefore(activeElement, nextElement);
});
