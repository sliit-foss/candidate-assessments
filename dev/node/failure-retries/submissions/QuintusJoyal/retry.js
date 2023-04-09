const fs = require('fs');

let task = {};

const logStatus = (taskId, status) => {
    console.log(`Task ${taskId} ${status}`);
    tasks.completed[status][taskId] = taskId;
    tasks.retryable[taskId] = null;
};

(async () => {
    tasks = JSON.parse(fs.readFileSync('tasks.json'));
    for (const retryable of tasks.retryable) {
        if (!retryable) continue;
        const id = retryable.id;
        let retryCount = retryable.fails + 1;

        while (retryCount <= 3) {
            if (Math.random() < 0.5) {
                logStatus(id, 'succeeded');
                break;
            } else {
                ++retryCount;
            }
        }

        if (retryCount > 3) {
            logStatus(id, 'failed');
        }
    }

    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
})();
