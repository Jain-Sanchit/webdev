const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require("path");
const multer = require('multer');
const { getTracks, insertTrack } = require('./database')

app.set('view engine', 'hbs')

// const tracks = [{
//     _id: 1,
//     title: 'Man Who Sold the World',
//     singer: 'Nirvana',
//     image: 'https://upload.wikimedia.org/wikipedia/en/3/36/With_the_lights_out_nirvana.jpg',
//     file: 'man.mp3'
//   }, {
//     _id: 2,
//     title: 'Numbers',
//     singer: 'Radiohead',
//     image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/03/radiohead_2000-620x394.jpg',
//     file: 'numbers.mp3'
//   }]

  app.use(express.urlencoded({extended: true}))
  app.use(express.static(__dirname+'/public'))
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now() +path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage: storage })



app.get('/', (req, res) =>  {
    const { id } = req.query
    getTracks().then(tracks=>{
        const selectedTrack = tracks.find(t => t._id == id)
    res.render('index', { tracks, selectedTrack })
    })
    
})


app.get('/add',(req,res)=>{
    res.render('add')
})



app.post('/add',upload.single('file'),(req,res,next)=>{
    const newTrack=req.body
    //newTrack.filename=req.file.filename
    //newTrack.fileN=file.name;
    insertTrack(newTrack).then(result=>{
        console.log(result);
        res.redirect('/?id=' + result.ops[0]._id)  



        //console.log(file.filename);
    
    // console.log(req.body);
    
    // tracks.push({
    //     _id: tracks.length+1,
    //     title: req.body.title,
    //     singer: req.body.singer,
    //     image: req.body.image,
    //     file: req.body.file
    // }) 
     //res.redirect('/?id='+ tracks.length)
    })
})


app.listen(3030,function(){
    console.log("Running on 3030");
    
})