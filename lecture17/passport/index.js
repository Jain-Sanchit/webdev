const express=require('express')

const app=express()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
app.set('view engine','hbs')
//app.set('views', __dirname + '/views')

app.get('/',(req,res)=>{
    res.render('index')

})

app.get('/login',(req,res)=>{
        res.render('login')
})

app.post('/login',(req,res)=>{
    passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true })
    
})

app.listen(8080,()=>{
    console.log("Running on 8080");
    
})