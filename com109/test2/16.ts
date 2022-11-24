const n = +prompt('Input N:')!;
// Calulate the prime numbers from 2 to n
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};
const primes: number[] = [];
for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
}
document.write(primes.join(', '));
