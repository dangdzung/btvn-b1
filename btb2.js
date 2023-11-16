//b3
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

function gt(n) {
    if (n === 1) return 1;
    return n * gt(n - 1);
}
console.log(gt(3));

function bcc(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n, "*", i, "=", n * i);
    }
}
console.log(bcc(2));

function kt(n) {
    return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0;
}
function namNhuan(n) {
    let year = n;
    while (year <= n + 50) {
        if (kt(year)) {
            console.log(year);
        }
        year++;
    }
}
namNhuan(2000);

function tamgiacvuong(n) {
    for (let i = 1; i <= n; i++) {
        let k = "";
        for (let j = 1; j <= i; j++) {
            k += "*";
        }
        console.log(k);
    }
}
console.log(tamgiacvuong(5));

function kt2(n) {
    let m = n;
    let sum = 0;
    while (m) {
        sum += (m % 10) * (m % 10);
        m /= 10;
    }
    return sum === n;
}
for (let i = 1; i <= 100; i++) {
    if (kt2(i) === true) {
        console.log(i);
    }
}

function nto(n) {
    while (n) {
        if (n > 1) {
            if (n === 2 || n === 3 || n === 5 || n === 7) {
                console.log(n);
            } else if (
                n % 2 !== 0 &&
                n % 3 !== 0 &&
                n % 5 !== 0 &&
                n % 7 !== 0
            ) {
                console.log(n);
            }
        }
        n--;
    }
}
nto(20);

function kc(n) {
    for (let i = 1; i <= n; i++) {
        let sp = "";
        for (let j = 1; j <= n - i; j++) {
            sp += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (i <= (n + 1) / 2) {
                sp += " ";
            } else sp += "*";
        }
        console.log(sp);
    }
    for (let i = 1; i <= n; i++) {
        let kt = "";
        for (let j = 1; j <= i; j++) {
            kt += " ";
        }
        for (let j = 1; j < 2 * n - 2 * i; j++) {
            kt += "*";
        }
        console.log(kt);
    }
}

kc(5);
