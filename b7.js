//Bài 1
const sum = (a, b) => {
    return a + b;
};

//Bai 2
const length = (string) => {
    return string.length;
};

//Bai 3
const pow = (a) => {
    return a * a;
};

//Bai 4
const max = (a) => {
    let max1 = -Infinity;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max1) {
            max1 = a[i];
        }
    }
    return max1;
};

//Bai 5
const max2 = (arr) => {
    let max = -1,
        s = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            s = arr[i];
        }
    }
    return s;
};
console.log(max2(["phan", "fdjdjfdj", "dsjdfjfjdfjdj"]));

//Bai 6
const increase = (arr) => {
    return arr.sort((a, b) => a - b);
};

console.log(increase([2, 1, 5, 4, 3, 6, 7, 0]));

//bai 7
const increase2 = (arr) => {
    return arr.sort();
};
console.log(increase2(["dung", "phan", "anh", "bao"]));

//bai 8
const trungVi = (arr) => {
    let n = Math.floor(arr.length / 2);
    console.log(arr[n + 1]);
};
trungVi([21, 22, 4, 3, 2, 3, 3]);

//bai 9
const number = (s) => {
    return s.split(" ").length;
};
//bai 10
const kt2 = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            return true;
        }
    }
    return false;
};

const kt = (arr) => {
    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (kt2(arr[i]) === true) {
            dem++;
        }
    }
    return dem;
};

console.log(kt(["phan", "dang", "dung"]));

//bai1.1
const min2 = (arr) => {
    const a = arr.sort();
    return a[a.lenght - 2];
};

//bai 5.1
const maxArr = (arr) => {
    let res = 0,
        cnt = 1,
        idx;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            cnt++;
        } else {
            cnt = 1;
        }
        if (cnt > res) {
            res = cnt;
            idx = i - res + 1;
        }
    }
    console.log(res);
    let sum = 0;
    for (let i = 0; i < res; i++) {
        sum += arr[idx + i];
    }
    console.log(sum);
};
maxArr([2, 1, 2, 3, 4, 5, 3, 7, 6]);

//bai 2.2
const maxlength = (arr) => {
    let max = -1;
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            word = arr[i];
        }
    }
    return word;
};
console.log(maxlength(["fhdhfdhf", "djfjd"]));

//bai5.3
const minnumber = (a) => {
    let newArr = [];

    for (let i = 0; i < a.length - 1; i++) {
        newArr.push(a[i]);
        let sum = 0,
            sum2 = a[i];
        for (let j = i + 1; j < a.length; j++) {
            sum2 += a[j];
            newArr.push(a[i] + a[j]);
            newArr.push(sum2);
            sum += a[j];
        }
        newArr.push(sum + a[i]);
    }
    return newArr.sort();
};
console.log(minnumber([1, 2, 3, 7, 8, 20]));


//