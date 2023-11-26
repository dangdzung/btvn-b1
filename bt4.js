//Bài 5
const b5 = [
    {
        firstName: "Phan",
        midName: "Đăng",
        lastName: "Dũng",
    },
    {
        firstName: "Phan",
        midName: "Đăng",
        lastName: "Khiêm",
    },
    {
        firstName: "Phan",
        midName: "Đăng",
        lastName: "Thành",
    },
    {
        firstName: "Phan",
        midName: "Đăng",
        lastName: "Cường",
    },
    {
        firstName: "Phan",
        midName: "Đăng",
        lastName: "Nghiêm",
    },
];
for (let i = 0; i < b5.length; i++) {
    if (b5[i].lastName.length >= 5) {
        console.log(b5[i]);
    }
}

const b15 = [
    {
        name: "Dũng",
        phone: "123",
        address: "CG",
    },
    {
        name: "Khương",
        phone: "123",
        address: "Nam Định",
    },
    {
        name: "Hưng",
        phone: "123",
        address: "Thanh Xuân",
    },
    {
        name: "Khánh",
        phone: "123",
        address: "Đống Đa",
    },
    {
        name: "Quân",
        phone: "123",
        address: "Hai Bà Trưng",
    },
];
for (let i = 0; i < b15.length; i++) {
    console.log(b15[i]);
}
