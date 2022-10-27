// 1
const x = 10; const
    y = 5;
let z = x + y;
console.log(z);
z = x * y;
console.log(z);
z = 15 / 9;
console.log(z);

// 2
let answer = 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addFunction() {
    answer++;
    console.log(answer);
}

// 3
function practialFunction() {
    const firstName = 'Joe';
    const surName = 'Bloggs';
    const age = 28;
    const t = age + 1;
    console.log(`My first name is ${firstName}`);
    console.log(`My sur name is ${surName}`);
    console.log(`My age is ${age}`);
    console.log(`Next year my age will be ${t}`);
}
practialFunction();
