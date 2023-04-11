# Failure-Retries
> Author: 5.H.4.D.0.W

1.  `runner.js` is a program that runs 100 random tasks. Each task has a chance to either succeed or fail when it is run. If a task fails it will be marked as "retryable" but if it fails more than three times in a row, it will be marked as "failed" and will not be run again. Similarly, if a task succeeds, it will be marked as "succeeded" and will not be run again.

2. `retry.js` is a program that reads a JSON file named `tasks.json` and retries the failed tasks that have failed less than 3 times. The program only runs the tasks that are marked as "retryable" in the JSON file.

3. `tasks.json` is the log file.
```json
{
		// contains completed task IDs
		"completed": {
				"succeeded": [], // set of succeeded IDs
				"failed": [] // set of failed IDs
		},
		// contains task fail counts
		"retryable": [] // map (id, failCount)
}
```

___



Run the async task runner by
```
node runner.js
```

Retry the less than 3 times failed tasks by
```
node retry.js
```

