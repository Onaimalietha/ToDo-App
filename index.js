const form = document.getElementById("form");
const input = document.getElementById("input");
const newTodos = document.getElementById("newTodos");
console.log("input value: ", input.value);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log(input);
    const todoTxt = input.value;

    if(todoTxt){
        const newTodoEl = document.createElement("li");
        newTodoEl.innerHTML = todoTxt; /* adiciona novo elemento da lista*/
        newTodos.appendChild(newTodoEl);

    }
});
