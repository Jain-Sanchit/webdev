const express=require('express')

const app=express();

app.set('view engine','hbs')

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.render('index')

})

app.post('/',(req,res)=>{
    console.log(req.body);
    
})

app.listen(3000,function(){
    console.log("Running on 3000");
    
})