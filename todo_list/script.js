let inputBox=document.getElementById('inputBox')
let list = document.getElementById('list')

inputBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });

function doFunction() {
   
    
    let num = inputBox.value;
    let str = "";
    
    
     str+=`<li  onclick="this.style   ='text-decoration: line-through'" >${num}</li>`;
    
    list.innerHTML +=str;
    
    inputBox.value=''
    
}


function doFunction2(){
    let items=list.getElementsByTagName("li");
   
    for (let i = 0; i <items.length ; i++) {
        const st=items[i].style.textDecoration;
        
        if( st =="line-through"){
            console.log('sanchit')
            
            items[i].parentNode.removeChild(items[i])
            i=-1;
        }
        
    }
}


