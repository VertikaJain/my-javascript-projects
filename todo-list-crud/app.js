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
            createListItems(id, toDoValue);
            container.classList.add("show-container"); // since visibility is false
            addToLocalStorage(id, toDoValue); // CRUD
            setAlert("Item/Task added to the list.", "success");
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
    localStorage.removeItem("list"); // removes all items from local storage
});

// on page load / reload
window.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    if (data.length > 0) {
        for (item of data) {
            createListItems(item.id, item.value);
        }
        container.classList.add("show-container");
    }
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
    const toDo = { id, value };
    // if localStorage is empty, create empty array, otherwise assign existing data to array
    let data = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    data.push(toDo);
    localStorage.setItem("list", JSON.stringify(data));
}
removeFromLocalStorage = (id) => {
    let data = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    data = data.filter(d => d.id !== id); // filtering data that has to be removed.
    localStorage.setItem("list", JSON.stringify(data)); // keeping rest of the data in local storage
}
editLocalStorage = (id, value) => {
    let data = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    // map() method can be used to edit the specific value w.r.t. id
    data = data.map(d => {
        if (d.id === id) {
            d.value = value;
        }
        return d;
    });
    localStorage.setItem("list", JSON.stringify(data));
}

// ****** SETUP ITEMS **********
createListItems = (id, toDoValue) => {
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
    // edit and delete button elements
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
}

/*
    Learnings:
    1. changing content and classlist dynamically
    2. setTimeOut() method calls a function or evaluates an expression after a specified number of milliseconds.

    ----- DOM ELEMENTS -----
    3. createElement() method creates an Element Node with the specified name.
    4. createAttribute() method creates an attribute with the specified name, and returns the attribute as an Attr object.
    5. setAttributeNode() method adds the specified attribute node to an element.
    6. appendChild() method appends a node as the last child of a node
    7. removeChild() method removes a specified child node of the specified element.
    8. children property returns a collection of an element's child elements, as an HTMLCollection object.
    9. previousElementSibling property returns the previous element of the specified element, in the same tree level.

    ----- LOCAL STORAGE -----
    10. The localStorage property allows to save key/value pairs in a web browser.
    11. localStorage.setItem() method is used to Add key and value to local storage,
    12. localStorage.getItem() method is used to Retrieve a value by the key from local storage,
    13. localStorage.removeItem() method is used to Remove an item by key from local storage.

    14. JSON.stringify() method used is to convert a data array to a string since json takes strings only
    15. JSON.parse() method is used to to convert the content back into an object
*/