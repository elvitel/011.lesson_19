function outer() {
    let y = 0;
    function inner(x) {
        y += x;
        console.log(y);
    }
    return inner;
}
let sum = outer();
sum(3);
sum(5);
sum(20);







