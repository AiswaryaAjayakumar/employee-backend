const bodyParser = require('body-parser')
var express = require ('express')
var mongoose = require('mongoose')
const { employeeModel } = require('./models/employeeModel')


var app=express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME")
})
app.post('/employees',(req,res)=>{

var employeeObject= new employeeModel(req.body)
res.json(employeeObject)
})
app.listen(process.env.POST||3003,()=>{

    console.log("Server started at http://localhost:3003/")
})
