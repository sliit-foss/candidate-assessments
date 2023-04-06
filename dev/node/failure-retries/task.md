# Description

- Consider a following scenario. There will be 2 scripts. One will be periodically performing an asyncrhonous task, for example an API call. The execution of these tasks may fail at certain times due to various errors. The goal is to record information about the failure of any of these tasks and from the second script, once executed should read this information and retry to failed task accordingly. A task if failed over 3 times will be marked as failed and not be retried anymore. Similarly once a task is retried successfully it'll be considered completed and will not be executed again. 

- Your task is to implement these 2 scripts. You can mock the asynchronous call with a mock function which fails on a random basis. You can use any form of persistant data storage for this task, even a simple text file if it feels sufficient.

# Tech stacks

- NodeJS