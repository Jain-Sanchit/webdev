let arr =[3,4,1,2,6,7,12,13,24,32,16]

function compare(a,b){
    if(a>b) return true;
    else return false;
}

arr.sort(compare);
// default sorting is lexo sorting , arr.sort()

console.log(arr)