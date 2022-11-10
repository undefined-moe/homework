/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
// 1
function checkAge1(age: number) {
    if (age > 18) {
        return true;
        // eslint-disable-next-line no-else-return
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge2(age: number) {
    if (age > 18) {
        return true;
    }
    return confirm('Did parents allow you?');
}
// The two function behaviours the same.

// 2
function checkAge3(age: number) {
    return age > 18 ? true : confirm('Did parents allow you?');
}

function checkAge4(age: number) {
    return age > 18 || confirm('Did parents allow you?');
}

// 3
function min(a: number, b: number) {
    return Math.min(a, b);
}

// 4
function pow(a: number, b: number) {
    return a ** b;
}
