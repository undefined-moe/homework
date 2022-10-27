// 1
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); // -> 4

// 2
const array = ["Jazz", "Blues"];
array.push("Rock-n-Roll");
array[(array.length - 1) / 2] = 'Classics';
console.log(array.shift());
array.unshift("Rap", "Reggae");

// 3
let ans = prompt('What is the "official" name of JavaScript?');
if (ans === 'ECMAScript') {
    alert('Right!');
} else {
    alert("Didn't know? ECMAScript!");
}

// 4
const number = +prompt()!;
if (number === 0) alert(0);
else if (number < 0) alert(-1);
else alert(1);

// Advanced 1
// @ts-ignore
const result = (a + b < 4) ? 'Below' : 'Over'; // eslint-disable-line

// Advanced 2
let login;
const message = (login === 'Employee')
    ? "Hello"
    : login === 'Director'
        ? 'Greetings'
        : login === ''
            ? 'No login'
            : '';
