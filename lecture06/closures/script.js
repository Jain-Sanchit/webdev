function counter(init,delta)
{
    var z=5;
    return function count(){

        init +=delta;
        console.log(init);
        
    }
}

let c1 = counter(1,3);
c1();
let c2 = counter(1,4);
c2();
let c3 = counter(8,3);
c3();


