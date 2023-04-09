const fs = require('fs');

let tasks = JSON.parse(fs.readFileSync('tasks.json'));

tasks.completed.succeeded = tasks.completed.succeeded.filter((i) => i);
tasks.completed.failed = tasks.completed.failed.filter((i) => i);
tasks.retryable = tasks.retryable.filter((i) => i);

fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));