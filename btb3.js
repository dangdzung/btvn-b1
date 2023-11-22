//b3
function kt(n) {
    if (n % 2 == 0) console.log(n);
}
kt(2);
//b4
function dtich(a, b) {
    return (a + b) * 2;
}
console.log(dtich(2, 4));

//b6
function gt(n) {
    if (n == 1) return 1;
    return n * gt(n - 1);
}

console.log(gt(3));

//b8
function daonguoc(s) {
    let w = "";
    for (let i = s.length - 1; i >= 0; i--) {
        w += s[i];
    }
    return w;
}
console.log(daonguoc("abcd"));

//b9;
function doixung(s) {
    let w = "";
    for (let i = s.length - 1; i >= 0; i--) {
        w += s[i];
    }
    return w == s;
}

console.log(doixung("aba"));

//b10
function tong(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(tong([1, 2, 3, 4]));

//b11;
function sohoanhao(n) {
    let sum = 1;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum == n;
}
console.log(sohoanhao(6));

//b13

function binhphuong(n) {
    console.log(n * n);
}
binhphuong(2);

//b14
function nto(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
console.log(nto(2));

//b15
function timmax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(timmax([1, 2, 9, 4, 5, 3]));
