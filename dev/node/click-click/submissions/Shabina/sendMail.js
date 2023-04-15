
import nodeMailer from 'nodemailer'

async function main(sendTo, htmlContent, id){
    let transporter = nodeMailer.createTransport({
        service : "gmail",
        auth: {
            type : "OAuth2",
            user: process.env.MAIL_USERNAME,
            pass : process.env.MAIL_PASSWORD,
            clientId : process.env.OAUTH_CLIENTID,
            clientSecret : process.env.OAUTH_CLIENT_SECRET,
            refreshToken : process.env.OAUTH_REFRESH_TOKEN,
        }
    })
    
    let mailOptions = {
        from : "shabinafarveen@gmail.com",
        to : sendTo,
        subject : "Invitation to Complete Tasks for SLIIT FOSS Community Membership Application",
        html : htmlContent,
    }
    
    await transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
            if(data.rejected.length > 0)
            console.log("Email failed to send to " + data.rejected.join() + " !");

            if(data.accepted.length > 0){
                console.log("\nEmail sent successfully to " + data.accepted.join() + " !");

                fetch(`http://localhost:8000/api/v1/recipients/sent/${id}`, {
                    method: 'PUT',
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
                    .catch((error) => {
                        console.error(error);
                    });
                }
        }
      });
    //console.log("Message sent: %s", info.messageId);
}

export default main;