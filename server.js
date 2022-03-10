const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const session = require('express-session')
const app = express();

app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000;

// SESSION SECTION
app.use(session({
    cookie:{
        maxAge:(60*60)*1000 
    },
    resave:false,
    secret:'nayan123',
    saveUninitialized:false
}))

app.use(cookieParser());

// REQUIRE ROUTER
const routeAPI = require('./restAPI/APIroute/route_API');
app.use('/api', routeAPI)

// CONNECTING TO SERVER
const dbDrive = 'mongodb+srv://nayan:nayan123@cluster0.o2qoh.mongodb.net/codecasperproject1'
mongoose.connect(dbDrive, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log('Successfully connected to the Server');
    app.listen(PORT, () => {
        console.log(`http://127.0.0.1:${PORT}`);
    })
}).catch(err => {
    console.log('Server is not Connected ' + err);
})