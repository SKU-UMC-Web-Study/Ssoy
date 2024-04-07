document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.querySelector(".todo-list-item");
    const completedList = document.querySelector(".completed-list");

    function createTodoItem(todo, isCompleted) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("item");
        const buttonClass = isCompleted ? "delete" : "complete";
        todoItem.innerHTML = `
            <p class="name">${todo}</p>
            <button class="${buttonClass}">${isCompleted ? "삭제" : "완료"}</button>
        `;
        return todoItem;
    }

    todoInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && todoInput.value.trim() !== "") {
            const todoItem = createTodoItem(todoInput.value.trim(), false);
            todoList.appendChild(todoItem);
            todoInput.value = "";
        }
    });

    function completeTodoItem(event) {
        const todoItem = event.target.parentNode;
        const completedItem = createTodoItem(todoItem.querySelector(".name").textContent, true);
        completedList.appendChild(completedItem);
        todoItem.remove();
    }

    function deleteTodoItem(event) {
        const todoItem = event.target.parentNode;
        todoItem.remove();
    }

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("complete")) {
            completeTodoItem(event);
        }
        else if (event.target.classList.contains("delete")) {
            deleteTodoItem(event);
        }
    });
});