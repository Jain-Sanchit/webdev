const express = require('express')
var todos=[];
const app = express()


app.use(express.urlencoded({extended: true}))


app.get("",(req,res)=>{
    res.send(todos);
})

app.post('/',(req,res)=>{
   const { title , striked=false}=req.body
   const newTodo={
       id: todos.length+1,
       title,
       striked
   }
    todos.push(newTodo)
    res.send(newTodo)
})

app.delete('/:id',(req,res)=>{
    const todoToDelete = todos.find(todo => todo.id == req.params.id)
    if(!todoToDelete.striked){
        return res.sendStatus(403)
    }

    todos = todos.filter(todo => todo.id != todoToDelete.id)
    res.sendStatus(200)

})

app.patch('/:id',(req,res)=>{
    let todoToPatch = todos.find(todo => todo.id== req.params.id)

     todoToPatch.striked= !!req.body.striked;  // anything followed by !! is converted to boolean
    todoToPatch.title=req.body.title

    res.send(todoToPatch)
    // if(!todoToPatch.striked){
    //     todoToPatch.striked=true;
    // }
    // else{
    //     todoToPatch.striked=false;
    // }



})

app.listen(3000,function(){
    console.log("Running on 3000");
    
})