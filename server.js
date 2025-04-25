const express = require('express');
// const path = require('path')
const sendEmail = require('./utils/sendEmail')
const app = express()
const PORT = process.env.PORT || 9000

// set a view engine as ejs
app.set('view engine', 'ejs')

// serve a static files/folders
app.use(express.static('public'))

// pass the data from the form
app.use(express.urlencoded({extended:false}))

// route to render email form
app.get("/",(req, res)=>{
    res.render("email-form")
})

// route to send email
app.post('/send-email', async (req, res)=>{
    const{email, massage}= req.body
    try {
        sendEmail(email, massage)
        res.render('email-form',{
            status:'success',
            message: 'Email send successfully'
        })
    } catch (error) {
        console.log(error);
        
        res.render('email-form',{
            status:'error',
            message: 'Email sending failed'
        })
        
    }
})

// app.use((err, req, res, next)=>{})
//* start the server 
app.listen(PORT, console.log(`Server is running on port ${PORT}`))