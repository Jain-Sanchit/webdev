let arr = [
    "Hello",
    "Hey",
    "Hiiiiii",
    "j",
    "hi"
];
len=arr[0];
arr.forEach(function(item) {
    if(item.length<len.length)
    {
        len=item;
    }
  });
  console.log(len)