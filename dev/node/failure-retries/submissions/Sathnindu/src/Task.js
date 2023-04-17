const axios = require('axios');
const cron = require('node-cron');
const {recordFailure, recordRetry} = require('./RecordFailure');

const MAX_RETRY = 3;
const randomJokeApiUrl = 'https://official-joke-api.appspot.com/random_joke';

// retry interval handler function
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// task function
async function doAsyncTask(taskId) {
    try {
        const response = await axios.get(randomJokeApiUrl);
        return 'Async task completed successfully.';
    } catch (error) {
        recordFailure(taskId);
        throw new Error('Async task failed.');
    }
}

// task performing function
async function performTask(taskId) {
    let retryCount = 0;
    let success = false;
    while (!success && retryCount < MAX_RETRY) {
        try {
            const result = await doAsyncTask(taskId);
            success = true;
            return result;
        } catch (error) {
            retryCount++;
            let interval = (Math.pow(2, (retryCount)) - Math.pow(2, (retryCount - 1))) * 1000;
            console.error(`Error performing task. Retrying in ${interval} ms. Retry count: ${retryCount}`);
            recordRetry(taskId);
            await sleep(interval);
        }
    }
    console.error('Task failed.');
    return null;
}

// Cron job - Perform task (Runs in every minute)
cron.schedule('* * * * *', async () => {
    const taskId = Date.now().toString() + Math.floor(Math.random() * 100000).toString();
    console.log(`Performing task. Task ID: ${taskId}`);
    await performTask(taskId).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
});