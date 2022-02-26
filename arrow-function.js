// function declare.
function add(num1, num2 = 10) {
    return num1 + num2;
}
// function expression..
const add2 = function add2(num1, num2) {
    return num1 + num2;

}
// function expression (annnonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
// arrow-function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(20, 10);
const sum2 = add2(14, 15)
const sum3 = add3(15, 17)
const sum4 = add4("dwell ", "samsung")
// console.log('dell' + ' ' + 'pc');

console.log(sum1, sum2, sum3, sum4);

const y = x => x * x;
const z = y(5);

console.log(z);
