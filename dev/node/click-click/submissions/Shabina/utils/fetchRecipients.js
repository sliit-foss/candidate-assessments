import { } from 'dotenv/config'
import fs from 'fs'
import path from 'path';
import sendMail from './sendMail.js'

async function sendMailsToRecipients() {
    await fetch('http://localhost:8000/api/v1/recipients/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            data.recipients.map(recipient => {
                var sendTo = recipient.email
                let htmlContent = fs.readFileSync(path.resolve(process.cwd(),"templates/mail.html"), "utf8");
                htmlContent = htmlContent.replace("{{name}}", `${recipient.name}`);
                htmlContent = htmlContent.replace("{{link}}", `http://localhost:8000/api/v1/recipients/click/${recipient._id}`);
                sendMail(recipient.email, htmlContent, recipient._id).catch(console.error);
            })
        })
        .catch(error => {
            console.error(error);
        });

}
export default sendMailsToRecipients;