const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path');
const adminData = require('./src/model/adminData');
const courseData= require('./src/model/courseData');
const employeeData=require('./src/model/employeeData');
const studentData = require('./src/model/studentData')
app.use(express.static('./dist/LibraryApp'));

app.use(cors());
app.use(express.json())





app.listen(port,()=>{console.log("server Ready at"+port)});