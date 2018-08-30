// Consider a sequence made up of the consecutive prime numbers. This infinite sequence would start with:

// "2357111317192329313741434753596167717379..."
// You will be given two numbers: a and b, and your task will be to return b elements starting from index a.

// For example, 5 elements from index 10 are: 19232.

// More examples in test cases.

// Tests go up to about index 20000.

// Good luck!

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    primes = primes.join('')
    return primes;
}

function solve(a, b) {
    var string = getPrimes(200000)
    return string = string.slice(a, b + a)
}
