const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector("#todoList");

const todoFn = (event) => {
    // prventDefault is used to disable the default behaviour of forms. This behaviour makes 
    // refreshes the form whenever its submitted thus loosing the value entererd in the input
    event.preventDefault();
    if(input.value.trim()!==""){
        // input.value.trim helps to prevent one from submitting an empty string

        const todo = document.createElement("p");
        // createElement is used to create the p element

        todo.textContent = input.value;

        // adding a className to our todo for easy styling
        todo.classList.add("task")
        todoList.appendChild(todo);

        // appendChild adds the p tag we created into our div container
        input.value="";
        // This sets the input back to empty whenever we submit a todo
    }
};

form.addEventListener("submit", todoFn);