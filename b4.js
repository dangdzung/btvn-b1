const b1 = [
    {
        name: "Math",
        favorite: 10,
        description: "So hard",
        advantage: "Make yourself intelligent",
    },
    {
        name: "Music",
        favorite: 9,
        description: "So easy",
        advantage: "Make yourself intelligent",
    },
    {
        name: "physical",
        favorite: 8,
        description: "So hard",
        advantage: "Make yourself intelligent",
    },
    {
        name: "IT",
        favorite: 11,
        description: "So hard",
        advantage: "Make yourself intelligent",
    },
];
let max = -Infinity;
for (let i = 0; i < b1.length; i++) {
    if (b1[i].favorite > max) {
        max = b1[i].favorite;
    }
}
console.log(max);

const b3 = [
    {
        lastName: "Mạnh",
        firstName: "Nguyễn",
        midName: "Thế",
        age: 10,
        address: "Đông Anh-Hà Nội",
        girlFriend: "Phượng",
    },
    {
        lastName: "Dũng",
        firstName: "Phan",
        midName: "Đăng",
        age: 19,
        address: "Cầu Giấy-Hà Nội",
        girlFriend: null,
    },
    {
        lastName: "Đạt",
        firstName: "Nguyễn",
        midName: "Văn",
        age: 19,
        address: "Long Biên-Hà Nội",
        girlFriend: null,
    },
];
for (let i = 0; i < b3.length; i++) {
    if (b3[i].girlFriend !== null) {
        console.log(b3[i]);
    }
}

const b10 = [
    {
        name: "Kem đánh răng",
        price: 50000,
        count: 1000,
    },
    {
        name: "Thuốc diệt chuột",
        price: 50000,
        count: 100,
    },
    {
        name: "Bàn chải",
        price: 50000,
        count: 1000,
    },
    {
        name: "Nước giặt",
        price: 100000,
        count: 200,
    },
];
let sum = 0;
for (let i = 0; i < b10.length; i++) {
    sum += b10[i].price * b10[i].count;
}
console.log(sum);
