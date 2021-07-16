import './style.css';

const showTasks = document.querySelector('#tasks');

const tasks = [
  {
    description: 'study',
    completed: true,
    index: 1,
  },
  {
    description: 'tidy my room',
    completed: false,
    index: 2,
  },
  {
    description: 'go to the gym',
    completed: false,
    index: 3,
  },
];

function renderTasks(tasksArr) {
  tasksArr.forEach((task) => {
    showTasks.innerHTML += `<li class="task" data-index="${task.index}"><input class="checkbox" type="checkbox">${task.description}</li>`;
  });
}

window.addEventListener('load', renderTasks(tasks));
