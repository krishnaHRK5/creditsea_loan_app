const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./models/userregister')
const cors = require('cors')
const loanModel = require('./models/loandetails')
const colors = require('colors')
const {connection} = require('./db')
require('dotenv').config
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

app.get('/', (req, res) => {
    try {
        res.status(200).json({ msg: "I am in home route" });
      } catch (error) {
        res.status(500).json({ msg: "Error in home route" });
      }
})

app.post('/postData', (req,res) => {
  loanModel.create(req.body)
  .then(LoanDetails => res.json(LoanDetails))
  .catch(err => console.log(err))
})

app.get('/getData', (req, res) => {
    loanModel.find({})
    .then(LoanDetails => res.json(LoanDetails))
    .catch(err => console.log(err))
})

// Login Route
app.post('/signup',(req,res) => {
    UserModel.create(req.body)
    .then(UserRegister => {
        res.json(UserRegister)
    })
    .catch(err => res.json(err))
})

app.post('/login',(req,res) => {
    const {email, pass} = req.body
    UserModel.findOne({email: email})
    .then(user => {
        if (user){
            if (user.pass === pass){
                res.json('success')
            }else{
                res.json('The Password is Incorrect')
            }
        }else{
            res.json('No Record existed')
        }
    })
})



app.get('/getUser/:id', (req,res) => {
    const id = req.params.id
    MongooseStudent.findById({_id: id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(port, async () => {
    try {
      await connection;
      console.log(colors.bgYellow(`connectd to mongo db`));
    } catch (error) {
      console.log(colors.bgRed("Error in connecting mongoDb"));
    }
    console.log(colors.rainbow(`Backend is running on port ${port}`));
});