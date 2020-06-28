const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const toDo = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editFlag = false;
let editElement;
let editId = "";

// ****** EVENT LISTENERS **********
// to add elements to the list : on form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const toDoValue = toDo.value;
    const id = new Date().getTime().toString(); // to get unique value for id, date() can be used.
    if (toDoValue) {
        if (!editFlag) { // to add item to the list dynamically
            let element = document.createElement("article"); // creating new article to add to list
            element.classList.add("grocery-item"); // add class
            const attribute = document.createAttribute("data-id"); // creating attribute 
            attribute.value = id;
            element.setAttributeNode(attribute); // set that attribute for the created element
            element.innerHTML = `<p class="title">${toDoValue}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
            list.appendChild(element); // add whole element to the toDo list
            container.classList.add("show-container"); // since visibility is false
            setAlert("Item/Task added to the list.", "success");
            // edit and delete button elements
            const editBtn = element.querySelector(".edit-btn");
            editBtn.addEventListener("click", editItem);
            const deleteBtn = element.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", deleteItem);
            // CRUD
            addToLocalStorage(id, toDoValue);
            setToDefault();
        }
        else { // to edit items in the list
            editElement.innerHTML = toDoValue;
            editLocalStorage(editId, toDoValue); // CRUD
            setAlert("Edit Successful!", "success");
            setToDefault();
        }
    } else { // if there is no value to edit
        setAlert("Please Enter Item/Task.", "danger");
    }
});

// to delete all elements from list
clearBtn.addEventListener("click", () => {
    const groceryItems = document.querySelectorAll(".grocery-item");
    if (groceryItems.length > 0) {
        for (let groceryItem of groceryItems) {
            list.removeChild(groceryItem);
        }
    }
    container.classList.remove("show-container");
    setAlert("Items have been removed from the list.", "danger");
    setToDefault(); // for edit functionality
    // localStorage.removeItem("list");
});

// ****** FUNCTIONS **********
setAlert = (text, styleClass) => {
    alert.textContent = text;
    alert.classList.add(`alert-${styleClass}`);
    setTimeout(() => {
        alert.textContent = ``;
        alert.classList.remove(`alert-${styleClass}`);
    }, 1000);
}
setToDefault = () => {
    toDo.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";
};
editItem = (event) => {
    const element = event.currentTarget.parentElement.parentElement; // article -> grocery-item class
    editElement = event.currentTarget.parentElement.previousElementSibling; // gets element right before btnContainer, that is title
    toDo.value = editElement.innerHTML; // assiging item value to input box
    submitBtn.textContent = "edit";
    editFlag = true;
    editId = element.dataset.id;
}
deleteItem = (event) => {
    const delElement = event.currentTarget.parentElement.parentElement;
    const id = delElement.dataset.id;
    list.removeChild(delElement);
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    setAlert("Item successfully removed from list.", "success");
    setToDefault();
    removeFromLocalStorage(id);
}

// ****** LOCAL STORAGE **********
addToLocalStorage = (id, value) => {
    // console.log("add to local storage", id);
}
removeFromLocalStorage = (id) => {
    // console.log("removeFromLocalStorage", id);
}
editLocalStorage = (id, value) => {
    // console.log("edited local storage", id);
}
// ****** SETUP ITEMS **********



/*
    Learnings:
    1. changing content and classlist dynamically
    2. setTimeOut() method
    3. createElement, createAttribute, setAttributeNode
    4. appendChild(), removeChild()
    5. children property of array
    6. previousElementSibling
*/