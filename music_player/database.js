const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })

const getDb = () => client.connect().then(() => {
  const db = client.db('testdb')
  return db
})

const getTracks = () => 
  getDb()
  .then(db => db.collection('tracks'))
  .then(collection => collection.find())
  .then(cursor => cursor.toArray())


// const insertTrack = (track) =>
//   getDb()
  // .then(db => db.collection('tracks'))
  // .then(collection => collection.insertOne(track))

const insertTrack = (track) => ({
    title: track.title,
    singer: track.singer,
    image: track.image,
    file: './public/'+track.fileN
  }).then(() => console.log("Done!"))
  .then(db => db.collection('tracks'))
  .then(collection => collection.insertOne(track))
  

  getTracks().then(tracks => console.log(tracks))

  module.exports = {
    getTracks,
    insertTrack
  }
