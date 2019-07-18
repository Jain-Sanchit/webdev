const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

// const getDB = dbName =>
//   client.connect()
//     .then(() => client.db(dbName))
//     .catch(err => console.log(err))


client.connect().then(()=>{    // by default it gives a promise , we can use callback too

    console.log("Connected")
})
.catch(err =>
    {
        console.log(err);
        
    })
    



