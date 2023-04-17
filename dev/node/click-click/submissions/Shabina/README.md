Description :
This application will send the email written in HTMl to the provided list of recipients using gmail services and also will track whether the recipients have clicked the link provided in the mail.

To run the Program
Step 1 : Create an env file and fill the relevent fields
Step 2 : Run the script app.js
  

Prerequisites:
* Set up google cloud platform for the account you are going to send emails from to enable OAuth2 authentication.
* List of Recipients (in the database) and a html email template

Required npm packages:
nodemon
dotenv
mongoose
nodemailer
express
cors
  

Note: click-click function currently only works when the localhost is up