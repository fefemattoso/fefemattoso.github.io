// script.js
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    loadReminders();
});

function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
        const taskList = document.getElementById('taskList');
        const listItem = createTaskListItem(task);
        taskList.appendChild(listItem);
        taskInput.value = '';
        saveTasks();
    }
}

function addReminder() {
    const reminderInput = document.getElementById('reminderInput');
    const reminder = reminderInput.value;
    if (reminder) {
        const reminderList = document.getElementById('reminderList');
        const listItem = createReminderListItem(reminder);
        reminderList.appendChild(listItem);
        reminderInput.value = '';
        saveReminders();
    }
}

function createTaskListItem(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.onclick = () => {
        listItem.classList.toggle('completed');
        saveTasks();
    };
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.onclick = () => {
        listItem.remove();
        saveTasks();
    };
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

function createReminderListItem(reminder) {
    const listItem = document.createElement('li');
    listItem.textContent = reminder;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.onclick = () => {
        listItem.remove();
        saveReminders();
    };
    listItem.appendChild(deleteButton);
    return listItem;
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(listItem => {
        tasks.push({
            text: listItem.textContent.slice(0, -2),
            completed: listItem.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const listItem = createTaskListItem(task.text);
        if (task.completed) {
            listItem.classList.add('completed');
        }
        taskList.appendChild(listItem);
    });
}

function saveReminders() {
    const reminderList = document.getElementById('reminderList');
    const reminders = [];
    reminderList.querySelectorAll('li').forEach(listItem => {
        reminders.push(listItem.textContent.slice(0, -1));
    });
    localStorage.setItem('reminders', JSON.stringify(reminders));
}

function loadReminders() {
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    const reminderList = document.getElementById('reminderList');
    reminders.forEach(reminder => {
        const listItem = createReminderListItem(reminder);
        reminderList.appendChild(listItem);
    });
}
