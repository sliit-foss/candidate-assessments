
const fs = require('fs');

const logStatus = (tasks, taskId, status) => {
    console.log(`Task ${taskId} ${status}`);
    tasks.completed[status].add(parseInt(taskId));
    tasks.retryable.delete(taskId);
};

const readTasksFromFile = () => {
    const tasks = JSON.parse(fs.readFileSync('tasks.json'));

    tasks.completed.succeeded = new Set(tasks.completed.succeeded);
    tasks.completed.failed = new Set(tasks.completed.failed);
    tasks.retryable = new Map(Object.entries(tasks.retryable));

    return tasks;
};

const writeTasksToFile = (tasks) => {
    tasks.completed.succeeded = [...tasks.completed.succeeded];
    tasks.completed.failed = [...tasks.completed.failed];
    tasks.retryable = Object.fromEntries(tasks.retryable);

    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
};

module.exports = { 
    logStatus,
    readTasksFromFile, 
    writeTasksToFile
};