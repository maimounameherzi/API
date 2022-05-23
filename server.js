const express = require("express") //import express from express
const app = express ()
const connectDb = require ('./config/connectdb')

const userSchema = require('./models/user.model')

app.use(express.json())
require ("dotenv").config()

const Port = 5000

app.get("/ayhkeya",async (req,res)=>{
    try {
        const users = await userSchema.find();
        return res.status(200).send({users})
    } catch (error) {
        return res.status(500).send({msg:error})
    }
})
 
app.post("/postayhkeya",async (req,res)=>{
    try {
        const user = await userSchema.findOne({email:req.body.email})
        const newUser = new userSchema(req.body)
        await newUser.save() 
         return res.send({msg:'added successfully'})
    } catch (error) {
        return res.status(500).send({msg:error})
    }
})

connectDb ()
app.listen(Port,(err)=>{
    if (err) throw console.error(err)
    console.log(`listen to Port ${Port}`)
})

