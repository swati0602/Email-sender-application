const nodemailer =require('nodemailer')


const sendEmail = async (to, messageContent)=>{
    try {
        // *create transport
        const transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port : 587,
            secure : false,
            auth:{
                user:'0902swati@gmail.com',
                pass:'advn hkdt zngp rafq',
            }
        })
        //* message object
        const message ={
            to,
            subject:"New massage from Nodemailer app",
            html:`
            <h3>You have received a new massage from Nodemailer app</h3>
            <P>${messageContent}</P>
            `,
        }
        ///* send email
        const info = await transporter.sendMail(message)
        console.log('Message send', info.messageId);
    } catch (error) {
       console.log(error);
        throw new Error("Email could not be send ")
    }
}


module.exports = sendEmail