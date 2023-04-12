# Description

- The task is to build a dynamic submission form where the number of fields change according to a provided JSON.

- Examples: 

    - 
        ```json
            {
                "name": "",
                "school": "",
                "grade": ""
            }
        ```

        - The above will result in a form containing 3 text inputs for name and school and grade.

    <br/>

    - 
        ```json
            {
                "name": "",
                "email": "",
                "age": 0,
                "gender": ["M", "F"]
            }
        ```

        - The above will result in a form containing 2 text inputs for name and email, one number input for age and one dropdown for gender
<br/>

# Tech stacks

- React / NextJs
- Tailwind CSS