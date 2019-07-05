const fs=require('fs')

fs.readFile('./input.txt','utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    
    const result= data.split('\n').filter(el => !isNaN(el)).reduce((acc,ele)=> acc+ +ele,0)
    

    //const result= data.split('\n').filter(el => !isNaN(el)).map(el => +el).reduce((acc,ele)=> acc+ele,0)

    console.log(result);
    
    fs.writeFile('./output.txt',result,(err)=>{
        if(err)
        return console.log(err);
  
        console.log("Done");
        
        
    })
  });

  
  
