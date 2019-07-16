const express=require('express')

const app=express()

const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'))


io.on('connection',socket =>{
    console.log("user connected")

    socket.on('chat',function(mes){
        console.log(mes);
        
    })
    
});



app.get('/',(req,res)=>{

    res.send('Hello World')
})


http.listen(8080,function(){
    console.log("Running on 8080")
    
})