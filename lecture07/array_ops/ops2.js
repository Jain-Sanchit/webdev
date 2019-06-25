let arr=[2,3,4]

// rms=Math.sqrt(/arr.length)

let rms = Math.sqrt(arr.map((item) => item*=item).reduce((acum, item) => {
    return acum + (item)
})/arr.length);

console.log(rms);