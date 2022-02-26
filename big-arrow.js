// 2 ta perameter dea jogfol
const add = (num1, num2) => num1 + num2;
const sum = add(7, 5);
// 3 ta parameter dea gun er function
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(3, 5, 6);

// const fiveTimes = (num) => num * 5;
// const outPut = fiveTimes(17)

const fiveTimes = num => num * 5;
const outPut = fiveTimes(10);

const getName = () => 'Brandon sam'
const name = getName()
console.log(name);


// console.log(outPut);

// multiline function..
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const outPut = result / 5;
    return outPut;
}
const total = doMath(10, 5);
console.log(total);