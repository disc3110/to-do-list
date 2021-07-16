import { from } from 'form-data'; // eslint-disable-line
import './style.css'; // eslint-disable-line
import { dragndrop, renderTasks } from './drag-and-drop.js'; // eslint-disable-line

import { checkboxesUpdate } from './status-updates.js'; // eslint-disable-line

const tasks2 = [
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

function setStorage(ToDoArr) {
  localStorage.setItem('ToDo', JSON.stringify(ToDoArr));
}

function getStorage() {
  const ToDoArr = JSON.parse(localStorage.getItem('ToDo'));
  window.addEventListener('load', renderTasks(ToDoArr));
}

function checkStorage() {
  if (localStorage.length > 0) {
    getStorage();
  } else {
    setStorage(tasks2);
    window.addEventListener('load', renderTasks(tasks2));
  }
}

checkStorage();
window.addEventListener('load', dragndrop(tasks2));
window.addEventListener('load', checkboxesUpdate(tasks2));

export { setStorage }; // eslint-disable-line