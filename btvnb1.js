function kt1(n) {
    if (n === 0) console.log("Day la so 0");
    if (n > 0) console.log(`${n} la so duong`);
    if (n < 0) console.log(`${n} la so am`);
}

function kt2(n) {
    if (n >= 18) console.log("Ban da du tuoi");
    else console.log("ban chua du tuoi");
}

function kt3(s) {
    let n = s.length;
    if (n > 5) {
        console.log("Chuoi qua dai");
    } else console.log("Chuoi du ngan");
}

function kt4(score) {
    if (score >= 5) console.log("Dau");
    else console.log("Truot");
}

function kt5(n) {
    if (n % 2 == 0) console.log("So chan");
    else console.log("So le");
}

function nto(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return n > 1;
}

function namNhuan(n) {
    if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
        console.log(`${n} la nam nhuan`);
    } else console.log(`${n} khong la nam nhuan`);
}

function solonthu2(arr) {
    let max1 = -9999999,
        max2 = -9999999;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }
    console.log(max2);
}
solonthu2([1, 2, 3, 4, 5, 9, 7]);

function max3(a, b, c) {
    return Math.max(a, b, c);
}
console.log(max3(1, 2, 3));

function number(n) {
    let sum = 0;
    let m = n;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    return sum === m;
}
console.log(number(6));

function kt6(day, month) {
    if (month > 12 || month < 1 || day > 31 || day < 1) {
        console.log("Khong hop le");
    } else if (
        (month === 1 ||
            month === 3 ||
            month === 5 ||
            month === 7 ||
            month === 8 ||
            month === 10 ||
            month === 12) &&
        day >= 1 &&
        day <= 31
    ) {
        console.log("Hop le");
    } else if (
        (month === 4 || month === 6 || month === 9 || month === 11) &&
        day >= 1 &&
        day <= 31
    ) {
        console.log("Hop le");
    } else if (month === 2 && (day === 28 || day === 29)) {
        console.log("hop le");
    }
}

function b10(tiengui, laisuat, thang) {
    return (tiengui / 100) * laisuat * thang + tiengui;
}
function b11(hour) {
    return hour >= 0 && hour <= 23;
}
console.log(b11(22));

function b13(arr, word) {
    return arr.includes(word.toUpperCase());
}
console.log(b13(["ASAP",'LOL'], "lol"));


