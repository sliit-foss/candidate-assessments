const express = require('express')
const mongoose = require('mongoose');
const {google} = require("googleapis");
const nodemailer = require("nodemailer");
const app = express()

// port
const port = 4002

// config
const Keys = require("./config/Keys");

// models
const Emails = require("./models/Emails");

// validation
const validateEmailInput = require("./validation/validateEmailInput");

// BodyParser middleware
const bodyParser = require("express");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// mongodb
mongoose.connect(
    Keys.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// email sending endpoint
app.post('/send', async (req, res, next) => {

    // email
    const FROM_EMAIL = Keys.GOOGLE_API_USER;
    const CLIENT_ID = Keys.GOOGLE_API_CLIENT_ID;
    const CLIENT_SECRET = Keys.GOOGLE_API_CLIENT_SECRET;
    const REDIRECT_URL = Keys.GOOGLE_API_REDIRECT_URL;
    const REFRESH_TOKEN = Keys.GOOGLE_API_REFRESH_TOKEN;
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

    // send email function - definition
    async function sendEmail(candidate_name, to_email) {
        // Transporter
        const accessToken = await oAuth2Client.getAccessToken()
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: FROM_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        let mailOptions = {
            from: FROM_EMAIL,
            to: to_email,
            subject: 'Invitation to Complete Tasks for SLIIT FOSS Community Membership Application',
            html:
                `<div style="background-color:#f3f4fa;width:95%;display:flex;text-align:justify;padding:30px 30px 50px 30px;border-radius:10px">
                    <div style="width:100%;min-height:400px">
                        <div>
                            <h2>Dear ${candidate_name},</h2>
                            <div>
                                <p style="text-align: justify;">Thank you for your interest in joining the SLIIT FOSS Community, a group
                                    of individuals who promote
                                    the use of
                                    Free
                                    and Open Source Software. We are excited to see your enthusiasm for FOSS and are pleased to invite
                                    you to take
                                    the
                                    next step in becoming a member of our community.</p>
                                <p style="text-align: justify;">To get to know you better, we have prepared a few tasks for you to
                                    complete. Please select your field
                                    of interest
                                    from the options below, and complete the task mentioned in the repository link. You are welcome to
                                    complete
                                    tasks in
                                    more than one field if you are interested.</p>
                                <p style="text-align: justify;">
                                    <a style="background-color:#007fff;border-radius:10px;width:150px;height:48px;color:#fff;padding:10px 30px;text-decoration:none"
                                       href="http://localhost:4002/click?email=${to_email}" rel="nofollow noopener" target="_blank">
                                       <b>View the GitHub Repository</b>
                                       </a>
                                </p>
                                <br>
                                <p style="text-align: justify;">We would also like to know why you are interested in FOSS, so please
                                    include this information in your
                                    reply to
                                    this
                                    email. Additionally, please ensure that you submit your completed tasks in accordance with the
                                    guidelines
                                    provided
                                    in the repository within one week of receiving this email.</p>
                                <p style="text-align: justify;">We are looking forward to having you onboard as a member of our
                                    community!</p>
                
                                <p style="text-align: justify;">
                                    Sincerely,<br>
                                    SLIIT FOSS Community
                                </p>
                            </div>
                            <br>
                            <p style="color:rgba(0,0,0,0.5);font-size:11px">
                                &copy;${new Date().getFullYear()} <span class="il">SLIIT FOSS Community</span>
                            </p>
                        </div>
                    </div>
                </div>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
            console.log(info);
        });

    }

    // send bulk emails
    for (let i = 0; i < req.body.length; i++) {

        // Check validation
        const {errors, isValid} = validateEmailInput(req.body[i]);
        if (!isValid) {
            return res.status(400).json({name: req.body[i].name, email: req.body[i].email, errors});
        }

        // email assigning
        const candidate_name = req.body[i].name;
        const to_email = req.body[i].email;

        // send mail function - calling
        await sendEmail(candidate_name, to_email).then(async () => {

            const addEmailLog = new Emails({
                email: to_email
            });

            addEmailLog.save()
                .then(() => {
                    console.log(`Email sent to ${to_email}`);
                    if (i === req.body.length - 1) {
                        return res.status(200).json({response: "Email sent successfully"});
                    }
                }).catch(err1 => {
                next(err1);
                return res.status(500).json({internalError: "Error saving record"});
            })

        }).catch(error => {
            next(error);
            return res.status(500).json(
                {error: "Internal server error occurred."}
            );
        })

    }

})

// GitHub link click tracking endpoint
app.get('/click', async (req, res) => {

    // email
    let to_email = req.query.email;

    // database find & update
    Emails.findOne({email: to_email}).then((data) => {
        Emails.updateOne({email: to_email}, {
            clicks: ++data.clicks
        }).then(() => {
            console.log(`Link clicked: ${to_email}`);
            res.redirect('https://github.com/sliit-foss/candidate-assessments');
        }).catch(err0 => {
            next(err0);
            res.status(500).send(`Internal server error occurred`);
        })
    }).catch((err) => {
        next(err);
        return res.status(500).json({internalError: "Unexpected error occurred! Please try again."});
    })

})

// default application running message
app.listen(port, () => {
    console.log(`NodeJS app listening on port ${port}`)
})