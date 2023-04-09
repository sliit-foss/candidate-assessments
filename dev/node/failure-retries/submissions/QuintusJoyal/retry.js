const { logStatus, readTasksFromFile, writeTasksToFile } = require('./components');

let tasks = {};

setInterval(async () => {
    tasks = readTasksFromFile();
    for (let [id, fails] of tasks.retryable) {
        if (Math.random() < 0.5) {
            logStatus(tasks, id, 'succeeded');
            break;
        } else {
            ++fails;
        }

        if (fails > 3) {
            logStatus(tasks, id, 'failed');
        }
    }

    writeTasksToFile(tasks);
}, 2000);
