const { logStatus, readTasksFromFile, writeTasksToFile } = require('./components');


// default
let tasks = {
	completed: {
		succeeded: new Set(),
		failed: new Set()
	},
	retryable: new Map(),
};

writeTasksToFile(tasks);

const runTask = (taskId) => {
	tasks = readTasksFromFile();

	if (tasks.completed.succeeded.has(taskId) 
		|| tasks.completed.failed.has(taskId)) {
		return;
	}

	// randomly fail a task
	if (Math.random() < 0.5) {
		logStatus(tasks, taskId, 'succeeded');
	} else {
		console.log(`Task ${taskId} failed`);

		let retryCount = tasks.retryable.get(taskId) ?? 0;

		if (retryCount >= 3) {
			logStatus(tasks, taskId, 'failed');
		} else {
			tasks.retryable.set(taskId, ++retryCount);
		}
	}

	writeTasksToFile(tasks);

};

// every second runs a task with random id of 0-99
setInterval(async () => {
	await runTask(Math.floor(Math.random() * 100));
}, 1000);