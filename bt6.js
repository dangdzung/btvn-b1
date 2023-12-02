//Bài 4
arr = [2, 1, 3, 45, 34, 67, 65, 32, 55, 34, 77, 90, 100];
const smallArr = (arr, number) => {
    for (let i = 0; i < arr.length - number + 1; i++) {
        let newArr = [];
        for (let j = 0; j < number; j++) {
            newArr.push(arr[i + j]);
        }
        console.log(newArr);
        // newArr.clear;
    }
};
smallArr(arr, 3);
//Bài 5
const tb = (arr) => {
    let sum = 0,
        cnt = 0;
    arr.forEach((element) => {
        sum += element;
        cnt++;
    });
    return sum / cnt;
};
console.log(tb([1, 2, 3, 4, 5]));

//Bài 7
const reverseWord = (string) => {
    let newString = string.split(" ");
    let word = "";
    for (let i = 0; i < newString.length; i++) {
        word += newString[i].split("").reverse().join("") + " ";
    }
    // newString.join(" ");
    // return newString;
    return word;
};
console.log(reverseWord("toi la phan dang dung"));
// console.log("dung".split("").reverse().join(""));

//bài 8
const maxWord = (string) => {
    let max = 0,
        word = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].length > max) {
            max = string[i].length;
            word = string[i];
        }
    }
    return word;
};
console.log(maxWord(["trong", "lichj", "su", "jfjd", "jfdejifuej"]));

//bài 9
let arr1 = [
        [1, 2, 3],
        [2, 3, 4],
    ],
    arr2 = [
        [4, 5, 6],
        [5, 6, 7],
    ];
const congmang = (arr1, arr2) => {
    let arr3 = [[], []];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr3[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return arr3;
};
console.log(congmang(arr1, arr2));

//Bài 10

const arrN = [1, 2, 4, 3, 2, 5, 66, 5, 66, 7];

const newS = (arr) => {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        let ok = 1;
        for (let j = 0; j < i; j++) {
            if (arr[j] === arr[i]) {
                ok = 0;
            }
        }
        if (ok === 1) newarr.push(arr[i]);
    }
    return newarr;
};

console.log(newS(arrN));

//Bài 11
let fibo = [];
fibo.push(0);
fibo.push(1);
for (let i = 2; i < 94; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
}
console.log(fibo);
const kt = (arr, fibo) => {
    let l = -1,
        r = -1;
    let n = arr.length - 1;
    for (let i = 0; i < 94; i++) {
        if (arr[0] === fibo[i]) {
            l = i;
            break;
        }
    }
    for (let i = 0; i < 94; i++) {
        if (arr[n] === fibo[i]) {
            r = i;
            break;
        }
    }
    // console.log(l);
    // console.log(r);
    let j = 0;
    if (l === -1 || r === -1) {
        return false;
    }
    while (l < r && j < arr.length) {
        if (fibo[l] !== arr[j]) {
            return false;
        } else {
            l++;
            j++;
        }
    }
    return true;
};
console.log(kt([0, 1, 1, 2, 3, 5, 8, 13, 21], fibo));

//Bài 12
const sum = arr.filter((number) => number % 3 === 0 || number % 5 === 0);

console.log(sum.reduce((x, y) => x + y));

//Bài 13
function nto(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const kt2 = (arr) => {
    return arr.filter((nummber) => nto(nummber));
};
console.log(kt2([2, 3, 4, 5, 6, 7, 8, 9]));

//Bài 14
const trunglap = (string) => {
    let l = 0,
        r = string.length - 1;
    while (l < r) {
        if (string[l] === string[r]) {
            return false;
        } else {
            l++, r--;
        }
    }
    return true;
};
const kt3 = (string) => {
    let s = string.split(" ");
    let max = -1,
        word = "";
    for (let i = 0; i < s.length; i++) {
        if (trunglap(s[i]) && s[i].length > max) {
            max = s[i].length;
            word = s[i];
        }
    }
    console.log(word);
};
kt3("mua dong di qua toi da lam mat di nguoi minh tung thuong lam sao toi co the tim va gap duoc nguoi do trong cuoc song xo bo cua hien tai hay do chi la nhung cam xuc nhat thoi ma toi co");


//b15
const trunglap2 = (string) => {
    let l = 0,
        r = string.length - 1;
    while (l < r) {
        if (string[l] === string[r]) {
            return false;
        } else {
            l++, r--;
        }
    }
    return true;
};