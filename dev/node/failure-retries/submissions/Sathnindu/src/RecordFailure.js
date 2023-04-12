const axios = require('axios');
const fs = require('fs');

const MAX_RETRY = 3;
const DATA_FILE = './log.json';

function recordFailure(taskId) {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE));
        if (data[taskId]) {
            data[taskId].failureCount++;
            if (data[taskId].failureCount >= MAX_RETRY) {
                data[taskId].status = 'failed';
            }
        } else {
            data[taskId] = {
                failureCount: 1,
                retryCount: 0,
            };
        }
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (err) {
        console.log(err);
    }
}

function recordRetry(taskId) {
    try {
        const data = JSON.parse(fs.readFileSync(DATA_FILE));
        data[taskId].retryCount++;
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (err) {
        console.log(err);
    }
}

module.exports = {recordFailure, recordRetry};
