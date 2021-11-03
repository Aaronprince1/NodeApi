const nodemailer = require('nodemailer');
const db = require("../config/db-config.js");
const Contact = db.contactdetails;

exports.create = (req,res)=>{
    Contact.create({
        Id: req.body.Id,
        Name:req.body.Name,
        Email:req.body.Email,
        Subject:req.body.Subject,
        YourMessage:req.body.YourMessage
    }).then((data)=>{
        res.status(200).json({
            status:true,
            message:"Details Added Successfully!!!"
        })
    })
    let transporter = nodemailer.createTransport({
        service:"gmail",
        // host:"smtp.ethereal.email",
        // port:"465",
        auth:{
            // user:"prince@ckssolutions.co.in",
            // pass:"Prince@CKS@123",
        },
        tls:{

            rejectUnauthorized:false
        }
    })
    
    
    let mailOptions = {
        from:req.body.Email,
        to:"prince@ckssolutions.co.in",
        subject:"Testing",
        text:"First Mail send from nodejs server",
    }
    
    transporter.sendMail(mailOptions, function(err,success){
        if(err){
            console.log(err);
        }
        else{
            console.log("Email Sent successfuly!!!");
        }
    })
    
}