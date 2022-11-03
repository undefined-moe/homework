// 1
let i = 3;
while (i) {
    alert(i--);
}

// 2
i = 0;
while (++i < 5) alert(i);

i = 0;
while (i++ < 5) alert(i);

// 3
for (let c = 2; c <= 10; c++) {
    if (c % 2 === 0) alert(c);
}

// 4
i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// 5
i = 0;
while (i < 100) {
    i = +prompt()!;
    if (!Number.isSafeInteger(i)) i = 0;
}

// 6
const range = (l: number, r: number) => [...new Array(r - l + 1).keys()].map((t) => t + l);
const isPrime = (n: number) => range(2, Math.floor(Math.sqrt(n))).every((t) => n % t);
const n = +prompt()!;
const primes = range(2, n).filter(isPrime);
alert(primes.join(','));
