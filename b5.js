const arr = [1, 3, 2, 5, 7, 8, 0, 4, 6, 30, 29, 48, 50, 20, 32, 43, 57, 86];
const findNumber = (arrPop, number) => {
    for (let i = 0; i < arrPop.length; i++) {
        if (arrPop[i] === number) {
            return i;
        }
    }
};

let arr2 = [2, 3, 4, 5, 6, 7, 8];
const bubbleSort = (arr2) => {
    for (let i = 0; i < arr2.length; i++) {
        for (let j = i + 1; j < arr2.length; j++) {
            if (arr2[i] > arr2[j]) {
                let t = a[i];
                a[i] = a[j];
                a[j]=t;
            }
        }
    }
    return arr2
};
console.log(bubbleSort(arr2))
