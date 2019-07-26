const socket=io()

socket.on('connected',()=>{
    console.log("Connected on "+socket.id);
    
})

$(function(){
    let msglist = $('#msglist')
    let msgbtn = $('#msgbtn')
    let msgbox= $('#msgbox')
    let chatdiv= $('#chat-div')
    let logindiv= $('#login-div')
    let loginbtn=$('#login-btn')
    let loginbox=$('#login-box')

    let user=''

    msgbtn.click(()=>{
        socket.emit('send-msg',{
            user: user,
            message: msgbox.val()})
    })

    loginbtn.click(()=>{
        
        user=loginbox.val();
        socket.emit('login',{
            user: user
        })
        chatdiv.show();
        logindiv.hide();
        
        
    })

    socket.on('recv-msg',function(data){
        msglist.append($('<li>'+ data.user  +" : "+data.message+'</li>'))
    })
})