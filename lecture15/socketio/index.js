const express=require('express')
const path=require('path')
const app=express()

const socketio=require('socket.io')



const http=require('http')

const server=http.createServer(app)

const io=socketio(server)

app.use(express.static(__dirname + '/front'))

let socketusers={}

io.on('connection',(socket)=>{
    console.log("new socket formed on "+socket.id);
    socket.emit('connected')

    socket.on('login',(data)=>{

        socketusers[data.user]=socket.id
        console.log(socketusers);
        
    })

    socket.on('send-msg',(data)=>{
        //console.log("Received message = "+ data.message) ;

        if(data.message.startsWith('@')){
            let recipient = data.message.split(':')[0].substr(1);
            let recipientsocket=socketusers[recipient]
            io.to(recipientsocket).emit('recv-msg',data)
        }
        else{
            io.emit('recv-msg',data)
        }

        
        
    })
})

server.listen(1234,()=>{
    console.log("Running on 1234 port");
    
})
