const express = require('express');
const APIcontroller = require('../APIcontroller/controller_API')
const routeAPI = express.Router();


// POST METHODES
routeAPI.post('/register_post', APIcontroller.registerPost);
routeAPI.post('/login_post',APIcontroller.loginPost)

module.exports = routeAPI

