const readline = require('readline');

let tasks = [];
let taskId = 1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display menu
function showMenu() {
    console.log("\nTask Manager");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Update Task");
    console.log("4. Delete Task");
    console.log("5. Exit");
    rl.question("Choose an option: ", handleInput);
}

// Function to handle user input
function handleInput(choice) {
    switch (choice) {
        case '1':
            rl.question("Enter task name: ", (name) => {
                rl.question("Enter task description: ", (description) => {
                    addTask(name, description);
                    showMenu();
                });
            });
            break;
        case '2':
            viewTasks();
            showMenu();
            break;
        case '3':
            rl.question("Enter task ID to update: ", (id) => {
                rl.question("Enter new name: ", (name) => {
                    rl.question("Enter new description: ", (description) => {
                        updateTask(parseInt(id), name, description);
                        showMenu();
                    });
                });
            });
            break;
        case '4':
            rl.question("Enter task ID to delete: ", (id) => {
                deleteTask(parseInt(id));
                showMenu();
            });
            break;
        case '5':
            console.log("Exiting...");
            rl.close();
            break;
        default:
            console.log("Invalid option. Try again.");
            showMenu();
    }
}

// CRUD Functions
function addTask(name, description) {
    const task = { id: taskId++, name, description };
    tasks.push(task);
    console.log("Task added:", task);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("\nTask List:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });
    }
}

function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task updated:", task);
    } else {
        console.log("Task not found.");
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log("Task deleted:", deletedTask[0]);
    } else {
        console.log("Task not found.");
    }
}

// Start the CLI
showMenu();
