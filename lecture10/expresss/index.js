const express = require('express')
const app = express()

 
app.get('/', function (req, res) {
//   res.send('Hello World')

res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello there</h1>
    <p>Supp ??</p>
</body>
</html>
`)
})
 
app.get('/index',function(req,res){
    res.sendFile('/home/sanchit/Desktop/webdev/lecture10/expresss' + '/index.html')
})

app.listen(3000)
