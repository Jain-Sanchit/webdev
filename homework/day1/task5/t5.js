let arr= [1, 2, 8, 4, 5, 6, 7]
var ans=[];

k=1;
arr1 = arr.reduce((acum, item) => {
    ans[0]=acum+10
    ans[k++]=item+10;
    return acum;
})

console.log(ans)

//  cb.lk/mapReduce