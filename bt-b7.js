//Array-Object

//bai 1.1
const rv = (s) => {
    let w = "";
    for (let i = s.length - 1; i >= 0; i--) {
        w += s[i];
    }
    return w;
};

//bai 1.2
const newarr = (arr, k) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i += k) {
        let arr3 = [];
        for (let j = i; j < k + i; j++) {
            if (j < arr.length) {
                arr3.push(arr[j]);
            }
        }
        arr2.push(arr3);
        arr3.clear;
    }
    return arr2;
};
console.log(newarr(["a", "b", "c", "d"], 3));

//bai1.3

const dele = (arr) => {
    let newArr = [];
    arr.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
};
console.log(dele([1, 2, 3, 2, 4]));

//bai1.4

const dele2 = (ob) => {
    const arr = [];
    for (let i = 0; i < ob.length; i++) {
        for (let j = i + 1; j < ob.length; j++) {}
    }
    return arr;
};
console.log(
    dele2([
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { y: 2, x: 1 },
    ])
);

//1.6
const arr4 = (s) => {
    const s2 = s.trim().replace(/\s+/g, " ");
    return s2;
};
console.log(arr4("     phan    dang    dung    "));

//1.8
const sx = (a) => {
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i].order > a[j].order) {
                let t = a[i].order;
                a[i].order = a[j].order;
                a[j].order = t;
            }
        }
    }
    return a;
};
console.log(
    sx([
        { id: 10, order: 0 },
        { id: 12, order: 2 },
        { id: 9, order: 1 },
        { id: 11, order: 3 },
    ])
);

//1.5
const xs=(ob,key)=>{
    ob.forEach(element=>{
        
    })
}



//1.7
