let a=[1,2,3,4,2,3,4,1];
// k=0;
// function filterfunct(n){
//     // k++;
//     // c=0;
//     // for(i=k;i<a.length;i++){
//     //     if(a[i]==n){
//     //         c++;
//     //     }
//     // }
//     // if(c>=1) return false;
//     // else return true;


// }

// arr1=a.filter(filterfunct);

arr.filter((item,index) => {
    return arr.indexOf(item) ==index;
})
console.log(arr1);