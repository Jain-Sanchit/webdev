let arr=[{
    name:'Divyansh',
    github_id:'silent-lad'
  },{
    name:'Abhishek',
    github_id:'abhishek97'
  },{
    name:'Dhruv',
    github_id:'imdhruvgupta'
  }];

  var ans=[];
  for (let i = 0; i < arr.length; i++) {
      
      ans.push(arr[i].github_id)
  }

  console.log(ans)


  // arr.map(el => el.github_id)