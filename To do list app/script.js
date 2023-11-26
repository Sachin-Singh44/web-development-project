function login() {
    var username = document.getElementById('username').value;

    if (username.trim() !== '') {
        // Save the current user to localStorage
        localStorage.setItem('currentUser', username);

        // Update UI
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('todo-list-container').style.display = 'block';
        document.getElementById('current-user').textContent = username;

        // Load tasks
        loadTasks();
    } else {
        alert('Please enter a username');
    }
}

function logout() {
    // Clear the current user from localStorage
    localStorage.removeItem('currentUser');

    // Update UI
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('todo-list-container').style.display = 'none';

    // Clear tasks
    clearTasks();
}

function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value;

    if (taskText.trim() !== '') {
        var tasksList = document.getElementById('tasks');
        var newTask = document.createElement('li');
        newTask.textContent = taskText;
        tasksList.appendChild(newTask);

        // Save tasks to localStorage
        saveTasks();

        // Clear the input field
        taskInput.value = '';
    }
}

function saveTasks() {
    var tasksList = document.getElementById('tasks').innerHTML;
    localStorage.setItem('tasks', tasksList);
}

function loadTasks() {
    var tasksList = localStorage.getItem('tasks');
    if (tasksList) {
        document.getElementById('tasks').innerHTML = tasksList;
    }
}

function clearTasks() {
    localStorage.removeItem('tasks');
    document.getElementById('tasks').innerHTML = '';
}

// Check if the user is already logged in
var currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    // Auto-login if the user is already logged in
    login();
}
