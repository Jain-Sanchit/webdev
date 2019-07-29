const express=require('express')

const app=express()

const mongoose=require('mongoose')


var myDb='mongodb://localhost/example'

mongoose.connect(myDb,
    { useNewUrlParser: true })

app.listen(3001,()=>{
    console.log("Running on 3000");
    
})