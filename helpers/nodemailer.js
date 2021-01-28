const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'edutiveindonesia@gmail.com',
        pass: 'iloveeducation1'
    }
});

console.log("hai")

function emailLogin(emailUser, subject, user) {
    let mailOptions = {
        from: "admin@Edutive.id ",
        to: emailUser,
        subject: subject,
        text: "terima kasih telah registrasi di Edutive. Selamat anda telah resmi menjadi Pahlawan untuk kemajuan pendidikan bangsa Indonesia",
        html: `<html>
    <head>
        <style>body{font-family: arial; font-size: 10pt; background: url('https://images.pexels.com/photos/850796/pexels-photo-850796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');}
        img{display: block;  width: 300px; margin: auto; margin-bottom: 5%;}
        h2{font-family:arial; font-size: 10pt; padding-left: 10px; color: #383838;}
        li{line-height: 1em; margin-bottom: 12px;}
        span{color: blue;}
        .wrapper{width: 90%; margin: 20px auto; }
        .end { padding-top:4%; }
        p .box { padding-top:5%; }
        .box {margin: 30px;
            background-color: #ffffff;
            border: 1px solid black;
            opacity: 0.8;
            padding: 20px;
            filter: alpha(opacity=60);}
        .box-bottom {
            padding-left: 40px;
            padding-right: 40px;}
        @media screen and (min-width: 600px) {
            .wrapper{width: 60%; margin: 20px auto;} 
            p .box{
                padding-top:2%;
            }
            .end {
                padding-top:4%;
            }
        }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="box">
                    <img src="https://pngimage.net/wp-content/uploads/2018/05/example-logo-png-1.png" alt="Logo">
                    <div>
                        <h4 class="end" style="text-align: left;">Hi <p style="color:tomato;" style="font-size: xx-large;">EDUTIVE ID</p>,</h4><p> Thanks for register and welcome to</p> <p style="font-size: larger;" style="color: chocolate;">EDUTIVE</p><p>Your account has been successfully added and you can now can login and officially become a hero of this Country Education. Click <a href="#">here</a> to Login.</p>
                        <p class="end"><i>This is an automated email. Do not reply this email.</i></p>
                    </div>
            </div>
            <div class="box-bottom">
                <p>If you have questions, please do not hesitate to contact us through direct message in the App or email to <a href="edutiveindonesia@gmail.com">edutiveindonesia@gmail.com</a>.</p>
                <p>© Edutive.Id </p>
            </div>
        </div>
    </body>
</html>`
    }

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent Successfully ");
        }
    });
}




module.exports = emailLogin