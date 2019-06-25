var new_arr=[];
function dup(arr) {
    for (i =0;i<arr.length;i++) {
        flag=0;
        for ( j = i+1; j < arr.length; j++) {
            if(arr[i]==arr[j])
            {
                flag=-1;
                break;
            }
        }       
        if(flag==0){
            new_arr.push(arr[i]);
        }
    }
    console.log(new_arr);
    
}

function f(){
    var arr=[];
    arr=prompt("Enter array ");
    dup(arr);
}