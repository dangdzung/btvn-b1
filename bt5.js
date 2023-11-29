const b2 = (arr, number) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return i;
        }
    }
};

const b3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
};
console.log(b3([2, 1, 4, 3, 5, 9, 7, 6]));

const b4 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
};
const b5 = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log(b5([2, 1, 3, 9, 6, 55, 33]));

const b9 = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
console.log(b9([2, 1, 3, 9, 6, 55, 33]));

let word = "php";
const b11 = (arr, word) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return i;
        }
    }
};
console.log(b11(['php','java'],word))