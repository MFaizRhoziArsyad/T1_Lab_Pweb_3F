let todoListItems = [];
// untuk memasukan item ke To do list
const addTodoItem = (userInput) => {
    const todoItem = {
      id: Date.now(),
      value: userInput,
    };
  
    todoListItems.push(todoItem);
    displayTodoItem(todoItem);
  };

// Untuk menSubmit Form ke to do dan memberi
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", (event) => {
  {
    event.preventDefault();
    const inputElement = document.getElementById("todo-input");

    if (inputElement.value) {
      inputElement.value.trim();

      addTodoItem(inputElement.value);

      inputElement.value = "";
      errorMessageElement.style.display = "none";
    } 
  }
});


//   display / menampilkan item pada to do 
const displayTodoItem = (newTodoItem) => {
    const todoList = document.getElementById("todo-list");
    const currentItem = document.querySelector(`[data-key='${newTodoItem.id}']`);
  
    if (newTodoItem.deleted) {
      currentItem.remove();
      return;
    }
  
    const listItemElement = document.createElement("li");
  
    listItemElement.setAttribute("data-key", newTodoItem.id);
  
    listItemElement.innerHTML = `    
        <div class="todo_item">
          <span>${newTodoItem.value}</span>
          <button id="delete-todo">Delete</button>
        </div>
      `;
  
    todoList.append(listItemElement);
    todoList.style.display = "block";
  };

  // klik untuk mendelete isi list yang tidak di perlukan
const todoList = document.getElementById("todo-list");

todoList.addEventListener("click", (event) => {
  const todoItemToDelete = event.target.parentElement.parentElement.dataset.key;

  deleteTodoItem(todoItemToDelete);
});

//   untuk mendelete item yang ada di To do list
const deleteTodoItem = (itemId) => {
    const todoItemIndexValue = todoListItems.findIndex(
      (todoItem) => todoItem.id === Number(itemId)
    );
  
    const todoItemWithDeleteField = {
      deleted: true,
      ...todoListItems[todoItemIndexValue],
    };
  
    todoListItems = todoListItems.filter(
      (todoItem) => todoItem.id !== Number(itemId)
    );
  
    displayTodoItem(todoItemWithDeleteField);
  };
  