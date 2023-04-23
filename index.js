const form = document.getElementById("form");
const input = document.getElementById("input");
const newTodos = document.getElementById("newTodos");

const dones = document.getElementById("dones");

let selectedCheckboxes;
let checkers

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const todoTxt = input.value;
    
    if(todoTxt){   
        const newTodoListEl = document.createElement("li"); /* adiciona novo elemento da lista*/
        newTodos.appendChild(newTodoListEl);
        newTodoListEl.className = "todoList";
        
        const newTodoCheck = document.createElement("input"); /* adiciona novo input tipo checkbox*/
        newTodoCheck.type = "checkbox";
        newTodoCheck.className = "checkbox-round";
        newTodoCheck.id = "todoCheck";

        newTodoListEl.appendChild(newTodoCheck);
        newTodoListEl.appendChild(document.createTextNode(todoTxt)); /* adds text to the list */
    } 

    selectedCheckboxes = document.querySelectorAll(".todoList input[type=checkbox]"); /* adds the new checkboxes to the query elements array */

    checkers = document.getElementsByClassName("checkbox-round"); /* returns array of the elements with the class*/

    for (var i = 0; i<checkers.length; i++){ /* cria um novo listener para cada evento da classe */
        console.log("new listener");
        checkers[i].addEventListener("change", checkersFunc);
    }
});

function checkersFunc(){
    selectedCheckboxes.forEach(deleteChecked); 
}

function deleteChecked(element){
    if(element.checked){
        element.disabled = true;
        dones.appendChild(element.parentElement);
    }
}

