/////date////
function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

let d = new Date();
let dateheader = document.querySelector('.head')
dateheader.innerHTML = 'Today Tasks: ' + formatDate(d)
/////////functionality/////
const addTaskButton = document.querySelector('.task-add-button');

let taskCounter = 1;
const removeTask = function (event) {
    let target = document.getElementById(event.currentTarget.id);

    if (event.target.className == 'task-button-remove') {
        target.remove();
    }
}

const doneTask = function(event) {
    let target = document.getElementById(event.currentTarget.id);
    if (event.target.className == 'task-button-done') {
        target.firstChild.style.textDecoration = 'line-through'
    }
}

let currentInput = document.querySelector('.task-input');
currentInput.addEventListener('keypress', addTaskKeyDownEnter);
const addTask = function () {
    let taskData = document.querySelector('.task-input').value;
    let taskQueue = document.querySelector('.task-queue');


    if (taskData != '') {
        let buttonRemove = document.createElement('button');
        let buttonDone = document.createElement('button');
        let task = document.createElement('div');
        buttonDone.className = 'task-button-done'
        buttonDone.innerHTML = 'Done'
        buttonDone.id = taskCounter;

        buttonRemove.className = 'task-button-remove'
        buttonRemove.innerHTML = 'Remove'
        buttonRemove.id = taskCounter;

        task.id = taskCounter;
        task.className = 'task';
        task.innerHTML = '<span class="task-text" id="' + task.id +'">' + taskData + '</span>';

        taskQueue.append(task);
        task.append(buttonRemove);
        task.append(buttonDone);

        let removeTaskButton = document.getElementById('' + taskCounter);
        removeTaskButton.addEventListener("click", removeTask)
        let doneTaskButton = document.getElementById('' + taskCounter);
        doneTaskButton.addEventListener("click", doneTask)
        currentInput.value = '';
        taskCounter++;
    }
}

function addTaskKeyDownEnter(event) {
    if (document.querySelector('.task-input').value != '' && event.which === 13) {
        addTask();
    }
}

    addTaskButton.addEventListener("click", addTask);