const createNewItemButton = document.querySelector(".add-task-button");
const createNewItemPage = document.querySelector(".add-page");
const initialPage = document.querySelector(".main-page");
const modifyPage = document.querySelector(".change-page");
const cancelCreateNewItemButton = document.querySelector(".canceled-button");
const saveItemButton = document.querySelector(".save-button");
const addNewItemInput = document.querySelector(".input-add-task");
const itemsListWrapper = document.querySelector("#items-list");
const todoText = document.querySelector(".todo-empty");
const inputChangeTask = document.querySelector(".input-change-task");
const cancelModifyItemButton = document.querySelector(
  ".canceled-change-button"
);
const saveModifyItemButton = document.querySelector(".save-change-button");

let currentKey;

const showSelectedItem = (e) => {
  if (e.target.className === "remove-box") {
    const currentKeyId = e.path[1].attributes[1].nodeValue;
    const test = JSON.parse(localStorage.getItem("items")).filter(
      ({ id }) => id != currentKeyId
    );
    localStorage.setItem("items", JSON.stringify(test));
    e.path[1].remove();
    if (itemsArr.length === 0) {
      todoText.style.display = "flex";
    }
  }
  if (e.target.className === "check-box") {
    const currentKeyCheck = e.path[1].attributes[1].nodeValue;
    itemsArr[currentKeyCheck].isDone = true;
    e.path[1].className = "new-item-with-cover";
    e.path[0].className = "check-box-with-cover";
    move(itemsArr, currentKeyCheck, itemsArr.length - 1);
    itemsListWrapper.append(itemsListWrapper.children[currentKeyCheck]);
    localStorage.setItem("items", JSON.stringify(itemsArr));
  }
  if (e.target.className === "new-item-text") {
    initialPage.style.display = "none";
    modifyPage.style.display = "flex";
    inputChangeTask.value = e.target.innerHTML;
    currentKey = e.path[1].attributes[1].nodeValue;
    localStorage.setItem("items", JSON.stringify(itemsArr));
  }
};

function move(array, fromIndex, toIndex) {
  array.splice(toIndex, 1, array.splice(fromIndex, 1)[0]);
  return array;
}

saveModifyItemButton.addEventListener("click", () => {
  itemsArr[currentKey].description = inputChangeTask.value;
  localStorage.setItem("items", JSON.stringify(itemsArr));
  itemsListWrapper.children[currentKey].children[1].innerHTML =
    inputChangeTask.value;
  initialPage.style.display = "flex";
  modifyPage.style.display = "none";
});

cancelModifyItemButton.addEventListener("click", () => {
  initialPage.style.display = "flex";
  modifyPage.style.display = "none";
});

itemsListWrapper.addEventListener("click", (e) => showSelectedItem(e));

const staticListOfItems = JSON.parse(localStorage.getItem("items")) || [];

const itemsArr = staticListOfItems.length ? [...staticListOfItems] : [];

const setOpenCreateItemBlock = (cancelCreateOpenBlock = false) => {
  if (cancelCreateOpenBlock) {
    createNewItemPage.style.display = "none";
    initialPage.style.display = "flex";
  } else {
    createNewItemPage.style.display = "flex";
    initialPage.style.display = "none";
  }
};

const appendNewItem = (inputValue, index, isDone) => {
  let itemCardBlock;
  if (itemsArr.length > 0) {
    todoText.style.display = "none";
  }
  if (isDone === true) {
    itemCardBlock = `<li class='new-item-with-cover' key='${index}'><div class="check-box-with-cover"></div>
    <p class="new-item-text">${inputValue}</p>
    <div class="remove-box"></div></li>`;
  } else {
    itemCardBlock = `<li class='new-item' key='${index}'><div class="check-box"></div>
    <p class="new-item-text">${inputValue}</p>
    <div class="remove-box"></div></li>`;
  }
  itemsListWrapper.innerHTML += itemCardBlock;
  setOpenCreateItemBlock(true);
  addNewItemInput.value = "";
};

if (staticListOfItems) {
  staticListOfItems.forEach(({ description, isDone, id }) => {
    appendNewItem(description, id, isDone);
  });
}

const findMax = () => {
  const result = JSON.parse(localStorage.getItem("items")).reduce((a, b) =>
    a.id > b.id ? a.id : b.id
  );

  return result + 1;
};

saveItemButton.addEventListener("click", () => {
  const inputValue = addNewItemInput.value;
  const newItem = {
    id: itemsArr.length <= 1 ? itemsArr.length : findMax(itemsArr),
    description: inputValue,
    isDone: false,
  };
  itemsArr.push(newItem);
  localStorage.setItem("items", JSON.stringify(itemsArr));
  appendNewItem(inputValue, newItem.id);
});

cancelCreateNewItemButton.addEventListener("click", () =>
  setOpenCreateItemBlock(true)
);

createNewItemButton.addEventListener("click", () => setOpenCreateItemBlock());
