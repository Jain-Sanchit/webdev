const express=require('express')

const app=express()

 const multer = require('multer');

//var upload = multer({ dest: 'uploads/' })

app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  const upload = multer({ storage: storage })


app.get('/',(req,res)=>{
    console.log("Welcome")
    res.render('index')
})

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send('file submitted')
      res.send(file)
    
  })


app.listen(3000,()=>{
    console.log("Running on 3000");
    
})