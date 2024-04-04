 const express = require("express");
 const app = express()
 const morgan = require('morgan')
 const logger = require("./logger");
 const authorize = require("./authorize");
 let { people } = require('./data')

 //static assets
 app.use(express.static('./methods-public'))
 app.use(express.json())
 //parse form data
 app.use(express.urlencoded({extended: false})) 
 
 app.get('/api/people', (req, res) => {
    res.status(200).json({code:'000000',success:true,data:people})
 })

 app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).send({success:true, stan:name})
 })

 app.post('/login', (req, res) => {
    const {name} = (req.body);
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
 })


 app.listen(5000, () => {
    console.log('Server is running on port 500...');
 })

 










