let arr= [1, 2, 8, 4, 5, 6, 7]

arr1 = arr.reduce((acum, item) => {
    if(acum>item)
    return acum;
    else
    return item;
})

console.log(arr1)


// arr.reduce((acc,item) => {
// return Math.max(acc,item)
// ,MIN_VALUE}