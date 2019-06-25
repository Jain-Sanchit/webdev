// document.getElementById("but").onclick=f(n);
// function f(n){
//     if(n!=null){
//         for (let i = 1; i <=n; i++) {
//             if(i%3==0 && i%5==0){
//                 console.log("FizzBuzz")
//                 document.write("FizzBuzz ")
//             }
//             else if(i%3==0){
//                 console.log("Fizz");
//                 document.write("Fizz ");
                
//             }
//             else if(i%5==0){
//                 console.log("Buzz");
//                 document.write("Buzz ");
                
//             }
//             else{
//                 console.log(i);
//                 document.write(i+" ")
//             }
            
//         }
//     }

// }

let inputBox=document.getElementById("inputBox")

let list=document.getElementById("list");
let item=document.createElement('li');

function f(){
    let start= new Date().getTime();
    let n=inputBox.value;
    if(n!=null){
        for (let i = 1; i <=n; i++) {
            let item=document.createElement('li');
            if(i%3==0 && i%5==0){
                item.innerHTML="FizzBuzz"
                list.appendChild(item);
            }
            else if(i%3==0){
                // list.innerHTML+= `<li>${"Fizz"}</>`  
                // second way of defining a new element

                item.innerHTML="Fizz"
                list.appendChild(item);
            }
            else if(i%5==0){
                // list.innerHTML+= `<li>${"Buzz"}</>`

                item.innerHTML="Buzz"
                list.appendChild(item);
            }
            else{
                // list.innerHTML+= `<li>${i}</>`

                item.innerHTML=i;
                list.appendChild(item);
            }
            
        }
    }
    let end=new Date().getTime();

    let time=end-start;
    
    console.log(time)
}


