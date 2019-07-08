const express=require('express');
const hbs = require('hbs')
const path = require('path')


const app=express()


hbs.registerPartials(path.join(__dirname, '/partials' ))


app.get('/',(req,res)=>{
    res.render('index.hbs',{
        name: 'Sanchit',
        //last: '<b>Jain</b>'
    })
})

app.listen(3000,function(){
    console.log("Running on 3000");
    
})