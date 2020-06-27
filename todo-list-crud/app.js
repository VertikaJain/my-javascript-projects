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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const toDoValue = toDo.value;
    const id = new Date().getTime().toString();
    if (toDoValue) {
        if (!editFlag) { // to add item to the list dynamically
            let element = document.createElement("article"); // creating new article to add to list
            element.classList.add("grocery-item"); // add class
            const attribute = document.createAttribute("data-id"); // creating attribute 
            attribute.value = id; // 
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
            container.classList.add("show-container");
            setAlert("Item/Task added to the list.", "success");

        }
        else { // to edit items in the list
            setAlert("editing", "success");

        }
    } else { // if there is no value to edit
        setAlert("Please Enter Item/Task.", "danger");
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


// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********



/*
    Learnings:
    1. changing content and classlist dynamically
    2. setTimeOut() method
    3. createElement, createAttribute, setAttributeNode
*/