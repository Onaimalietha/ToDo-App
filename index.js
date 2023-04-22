const form = document.getElementById("form");
const input = document.getElementById("input");
const newTodos = document.getElementById("newTodos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const todoTxt = input.value;
    
    if(todoTxt){   
        const newTodoListEl = document.createElement("li"); /* adiciona novo elemento da lista*/
        newTodos.appendChild(newTodoListEl);
        newTodoListEl.className = "todoList";

        console.log("Todotxt :", todoTxt);
        console.log("checkbox value : ", todoTxt);
        
        const newTodoCheck = document.createElement("input"); /* adiciona novo input tipo checkbox*/
        newTodoCheck.type = "checkbox";
        newTodoCheck.className = "checkbox-round";
        newTodoCheck.id = "todoCheck";
        
        newTodoListEl.appendChild(newTodoCheck);
        newTodoListEl.appendChild(document.createTextNode(todoTxt)); /* adds text to the list */
    }
});

let selectedCheckboxes = document.querySelectorAll(".todoList input[type=checkbox]");

selectedCheckboxes.addEventListener("change", function(){
        
    console.log("New value is: " + this.checked);
    selectedCheckboxes.forEach(function(item) {
      item.parentElement.style.display = "none";
    }, false);  
});
