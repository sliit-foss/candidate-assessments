const fs = require('fs');

// default
let tasks = {
	completed: {
		succeeded: [],
		failed: []
	},
	retryable: [],
};

fs.writeFileSync('tasks.json', JSON.stringify(tasks));

const logStatus = (taskId, status) => {
	console.log(`Task ${taskId} ${status}`);
	tasks.completed[status][taskId] = taskId;
	tasks.retryable[taskId] = null;
};

const runTask = (taskId) => {
	tasks = JSON.parse(fs.readFileSync('tasks.json'));
	if (tasks.completed[taskId] && tasks.completed[taskId].status) {
		return;
	}

	// randomly fail a task
	if (Math.random() < 0.5) {
		logStatus(taskId, 'succeeded');
	} else {
		console.log(`Task ${taskId} failed`);

		let retryCount = tasks.retryable[taskId]?.fails ?? 0;

		if (retryCount >= 3) {
			logStatus(taskId, 'failed');
		} else {
			tasks.retryable[taskId] = { id: taskId, fails: ++retryCount };
		}
	}

	fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));

};

// every second runs a task with random id of 0-99
(async () => {
	while (true) {
		const taskId = Math.floor(Math.random() * 100);
		await runTask(taskId);
		await new Promise(resolve => setTimeout(resolve, 1000));
	}
})();