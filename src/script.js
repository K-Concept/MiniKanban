// Define variables for the task form and task lists
const form = document.querySelector('.add-task-form');
//const todoList = document.querySelector('#todo');
//const inProgressList = document.querySelector('#in-progress');
//const doneList = document.querySelector('#done');

// Listen for form submit events and add new tasks to the "To Do" list
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = form.querySelector('input[name="task-name"]');
  const descInput = form.querySelector('textarea[name="task-description"]');
  const dateInput = form.querySelector('input[name="due-date"]');
  const name = nameInput.value;
  const description = descInput.value;
  const dueDate = dateInput.value;
  const newTask = createTask(name, description, dueDate);
  todoList.appendChild(newTask);
  nameInput.value = '';
  descInput.value = '';
  dateInput.value = '';
});

// Define a function to create a new task with the given name, description, and due date
function createTask(name, description, dueDate) {
  const task = document.createElement('li');
  const taskId = Date.now();
  task.classList.add('task');
  task.setAttribute('draggable', 'true');
  task.setAttribute('data-task-id', taskId);
  task.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
    <p>Due: ${dueDate}</p>
  `;
  return task;
}