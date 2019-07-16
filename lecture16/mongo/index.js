const {MongoClient}=require('mongodb')

const client= new MongoClient.connect('mongodb://localhost:8080')  // instance

client.connect().then(()=>{    // by default it gives a promise , we can use callback too

    console.log("Connected")
})
.catch(err =>
    {
        console.log(err);
        
    })
    



