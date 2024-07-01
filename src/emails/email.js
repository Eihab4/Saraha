import nodemailer from "nodemailer"
import { emailHtml } from "./emailHtml.js";

export const sendEmail = async(email,otp) =>{
    const transporter = nodemailer.createTransport({
   service:"gmail",
   auth: {
    user: "eihabmuhammed56@gmail.com",
    pass: "gytbonmmgwupsclu",
  },
    });
    
    const info = await transporter.sendMail({
    from: '"Saraha ✉️" <eihabmuhammed56@gmail.com>',
    to: email,
    subject: "New Message ! ",
    html: emailHtml(otp),
  });
}