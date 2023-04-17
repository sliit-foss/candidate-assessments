# click-click

```cd src``` for the source code

Installation command
<br>
```npm i```

Starting command
<br>
```npm start```

This application contains two <b>endpoints</b> as,
- POST ```http://localhost:4002/send```
  - Email sending endpoint
  - Sample input (body - JSON array [name, email]):<br>```[{"name": "Sample Name 1", "email": "email1@example.com"}, {"name": "Sample Name 2", "email": "email2@example.com"}, ...]```
  <br><br>
- GET ```http://localhost:4002/click```
  - GitHub repository click tracking endpoint
  - Sample input (query [email]):<br>```http://localhost:4002/click?email=email1@example.com```

## MongoDB
This application uses MongoDB on localhost to record email logs
<br><br>
<b>Host</b>: localhost<br>
<b>Port</b>: 27017<br>
<b>Database</b>: sliit-foss<br>

>First, either replace or copy ```.env.example``` as ```.env``` to activate MongoDB functionalities.

## Gmail OAuth2 Credentials
- This application uses Google Cloud and OAuth2 credentials for a reliable email-sending function.
- ```.env.example``` file contains default API keys except for client secret.<br>
- Run ```cp env.example .env``` to create ```.env``` file and replace the client secret, which is sent via the reply email to the assessment invitation.