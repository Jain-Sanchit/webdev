const express=require('express');
const hbs = require('hbs')

const app=express()

app.set('view engine', 'hbs')

const tracks = [{
    _id: 1,
    title: 'Man Who Sold the World',
    singer: 'Nirvana',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/36/With_the_lights_out_nirvana.jpg',
    file: 'man.mp3'
  }, {
    _id: 2,
    title: 'Numbers',
    singer: 'Radiohead',
    image: 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/03/radiohead_2000-620x394.jpg',
    file: 'numbers.mp3'
  }]

  //app.use(express.urlencoded({extended: true}))

  app.get('/',(req,res)=>{
    //const { id } = req.query
      res.render('index',{tracks})
  })

  app.listen(8081, function () {
    console.log("Serving on 8081")
  })