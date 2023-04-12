## Failure Retries

```cd src``` for the source code

- ```Task.js``` script contains the source of the task performing and retrying.
    - It has been programmed to do an API call to random jokes API every minute.
    - Three retries perform after the first failure, and Each retry performs after 1, 2, and 4 seconds after the last try. 
- ```RecordFailure.js``` script contains the source of the error recording.
- ```log.json``` file contains the reported failure data.