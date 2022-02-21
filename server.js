const express = require("express");
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get('/', () => {
    resizeBy.send('welcome buzz')
});

app.post('/conatact/form_send', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'rajsuper806@gmail.com',
            pass: 'zefofkzbnwsjjoyc'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'rajsuper806@gmail.com',
        subject: `Message from ${data.firstname}`,
        html: `
    <p>You have a new contact request</p>
    <h3>Details</h3>
    <ul>
    <li>Name: ${data.firstname} ${data.lastname}</li>
    <li>Email: ${data.email}</li>
    <li>Phone number: ${data.phnumber}</li>
    <li>Company name: ${data.companyname}</li>
    </ul>
    <ul>
    <h3>Comments</h3>
    <p> ${data.comments}</p>
    </ul>
    `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
            console.log(error);
        } else {
            res.send('Success')
            console.log(req.body);
        }
    });
    smtpTransport.close();
});


app.post('/newsletter/subscribe', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'rajsuper806@gmail.com',
            pass: 'zefofkzbnwsjjoyc'
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'rajsuper806@gmail.com',
        subject: `New Subscriber from ${data.firstname}`,
        html: `
    <p>You have a new Subscriber</p>
    <h3>Details</h3>
    <ul>
    <li>Name: ${data.firstname} ${data.lastname}</li>
    <li>Email: ${data.email}</li>
    </ul>
    `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
            console.log(error);
        } else {
            res.send('Success')
            console.log(req.body);
        }
    });
    smtpTransport.close();
});

const port = 3001
app.listen(port, () => {
    console.log('Server Started at 3001');
});