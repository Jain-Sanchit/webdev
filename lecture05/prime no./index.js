function f1(n){
    var str="";
    for(var j=2;j<=n;j++){
        var t=0;
        for(var k=2;k<j;k++){
            if(j%k==0){
                t=0;
                break;
            }
            else{

                t=-1;
            }
        }
        if(t==-1){
            str=str+j+" ";
        }
    }
    console.log(str);
    document.write(str);

}
function f(){
    var n=prompt("Enter value of n : " , "10");
    if(n!=null){
        f1(n);
    }
}