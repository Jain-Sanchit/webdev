const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')

let songs=[{
    id: 1,
    title: "Song1",
    singer: "singer1"

},
{
    id: 2,
    title: "Song2",
    singer: "singer2"
}]

app.get('/', (req, res) =>  {
    res.render('index',songs)
})

app.listen(3000,function(){
    console.log("Running on 3000");
    
})