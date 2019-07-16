const Sequelize=require('sequelize')
const express = require('express')
const app = express()

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
  });


  const Todo=sequelize.define('todo',{

    title:{
        type: Sequelize.STRING,
        allowNull: false
    },

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    striked:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }

  });

//   Todo.create({ title: "Biscuit"}).then(item => {
//     console.log("items auto-generated ID:", item.id);
//   });


//   Todo.findAll().then( todo =>{
//       console.log("All users", JSON.stringify(Todo));
      
//   })

// Todo.destroy({
//     where:{
//         id: "2"
//     }
// }).then(()=>{
//     console.log("Deleted");
    
// })

Todo.update({striked: "true"},{
    where:{
        id: "1"
    }
}).then(() => {
    console.log("Done");
  });



//   sequelize.authenticate().then(()=>{
//       console.log("Connected");
      
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

Todo.sync().then(() => {
    app.listen(3000)
  })
  