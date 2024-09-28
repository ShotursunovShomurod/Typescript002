const API_URL = 'http://localhost:8080/todos';

async function fetchTodos() {
  const response = await fetch(API_URL);
  const todos = await response.json();
  renderTodos(todos);
}


interface Todo {
    id: string,
    title: string
    completed: boolean
}

function renderTodos(todos : string) {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = ''; as HTMLLIElement;
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out';
    li.innerHTML = `
                <div class="todo-content flex items-center justify-between p-4">
                    <div class="flex items-center space-x-3 flex-grow">
                        <input id={todo.id} type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleComplete(${todo.id}, this.checked)" class="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out">
                        <label for={todo.id} class="todo-text ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}">${todo.title}</label>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="startEdit(this.closest('li'), ${todo.id})" class="edit-btn text-blue-500 hover:text-blue-600">Edit</button>
                        <button onclick="deleteTodo(${todo.id})" class="text-red-500 hover:text-red-600">Delete</button>
                    </div>
                </div>
                <div class="edit-content hidden p-4 bg-blue-100">
                    <input type="text" class="edit-input w-full p-2 mb-2 border rounded" value="${todo.title}">
                    <div class="flex justify-end space-x-2">
                        <button onclick="saveEdit(this.closest('li'), ${todo.id})" class="save-btn bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">Done</button>
                        <button onclick="cancelEdit(this.closest('li'))" class="cancel-btn bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded">Cancel</button>
                    </div>
                </div>
            `;
    todoList.appendChild(li);
  });
}

async function addTodo(title : string) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: Date.now().toString(), title, completed: false })
  });
  if (response.ok) {
    fetchTodos();
  }
}

function startEdit(li : HTMLLIElement, id : string) {
const ContentList = li.querySelector('.todo-content') as HTMLLIElement
const EditList = li.querySelector('.edit-content') as HTMLLIElement
ContentList.classList.add('hidden');
EditList.classList.remove('hidden');
}

async function saveEdit(li:HTMLLIElement, id : string) {
    const EditInput = li.querySelector('.edit-input') as HTMLInputElement
  const newTitle = EditInput.value.trim();
  if (newTitle) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle })
    });
    if (response.ok) {
      fetchTodos();
    }
  }
}

function cancelEdit(li:HTMLLIElement) {
    const todoContent =   li.querySelector('.todo-content') as HTMLDivElement
    todoContent.classList.remove('hidden');
    const editContent =    li.querySelector('.edit-content') as HTMLDivElement
    editContent.classList.remove('hidden');
    editContent.classList.add('hidden');
}

async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (response.ok) {
    fetchTodos();
  }
}

async function toggleComplete(id, completed) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  if (response.ok) {
    fetchTodos();
  }
}

document.getElementById('todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('todo-input');
  if (input.value.trim()) {
    addTodo(input.value.trim());
    input.value = '';
  }
});

fetchTodos();