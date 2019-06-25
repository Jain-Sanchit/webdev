let obj1 = {
    a:10,
    b:10,
    c: "Some text",
    sum: function(){
        return this.a + this.b
    }
}

console.log(obj1)
console.log(obj1.sum());
