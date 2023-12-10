// const bookStore = {
//     name: "",
//     author: "",
//     count: "",
//     position: "",
// };
// const addBook = (book) => {
//     bookStore.push(book);
// };

//Quan ly thu vien
// const library = [];
// const addBook = (book) => {
//     library.push(book);
// };
// addBook({ name: "de men", author: "to hoai", amout: 1, position: "qwtrgs" });
// console.log(library);
// const deleteBook = (bookName) => {
//     const idx = library.findIndex((book) => book.name === bookName);
//     if (idx !== -1) {
//         library.splice(index, 1);
//     }
// };

// Tai khoan ngan hang
// const bank = [];
// const addBank = (pp) => {
//     bank.push(pp);
// };
// addBank({ stk: "12345678", name: "abc", sodu: 123456789, lichsugiaodich: [] });
// addBank({ stk: "12345478", name: "bfc", sodu: 123456789, lichsugiaodich: [] });
// addBank({ stk: "12390678", name: "ebc", sodu: 123456789, lichsugiaodich: [] });
// addBank({ stk: "12330678", name: "anc", sodu: 123456789, lichsugiaodich: [] });
// const ckdi = (name, stk, sotien) => {
//     let a = 0;
//     const idx = bank.findIndex((acc) => acc.name === name);
//     const idx2 = bank.findIndex((acc) => acc.stk === stk);
//     if (idx !== -1 && idx2 !== -1) {
//         if (bank[idx].sodu >= sotien) {
//             a = bank[idx].sodu - sotien;
//             bank[idx].sodu = a;
//             bank[idx].lichsugiaodich.push(
//                 "ban da chuyen khoan",
//                 sotien,
//                 ".Tai khoan cua ban con lai:",
//                 a
//             );
//         }
//     }
// };
// const nhatien = (name, stk, sotien) => {
//     let a = 0;
//     const idx = bank.findIndex((acc) => acc.name === name);
//     const idx2 = bank.findIndex((acc) => acc.stk === stk);
//     if (idx !== -1 && idx2 !== -1) {
//         if (bank[idx].sodu >= sotien) {
//             a = bank[idx].sodu + sotien;
//             bank[idx].sodu = a;
//             bank[idx].lichsugiaodich.push(
//                 "ban da nhan",
//                 sotien,
//                 ".Tai khoan cua ban :",
//                 a
//             );
//         }
//     }
// };
// ckdi("abc", "12345678", 789);
// nhatien("abc", "12345678", 10);
// console.log(bank);

//QuanlyKhachHang
// const client = [];
// const addClient = (pp) => {
//     client.push(pp);
// };
// addClient({
//     name: "phan dang dung",
//     email: "abc@gmail.com",
//     number: "123",
//     address: "hn",
// });
// addClient({
//     name: "nguyen tuan anh",
//     email: "acd@gmail.com",
//     number: "323",
//     address: "hn",
// });
// addClient({
//     name: "lo vi song",
//     email: "xyz@gmail.com",
//     number: "345",
//     address: "hn",
// });
// addClient({
//     name: "lee ruby",
//     email: "dcvcx@gmail.com",
//     number: "1111",
//     address: "seoul",
// });

// const repairClient = (name, s) => {
//     const idx = client.findIndex((acc) => acc.name === name);
//     if (idx !== -1) {
//         client[idx].number = s;
//     }
// };
// repairClient("lee ruby", "123");
// // console.log(client);

// const tk = (gt1) => {
//     client.forEach((x) => {
//         if (
//             x.name === gt1 ||
//             x.number === gt1 ||
//             x.email === gt1 ||
//             x.address === gt1
//         ) {
//             console.log(x);
//         }
//     });
// };
// tk("123");

// quan ly hoi vien
const hoivien = [];
const addHoivien = (pp) => {
    hoivien.push(pp);
};
addHoivien({
    name: "lo vi song",
    tuoi: 29,
    diachi: "HN",
    goitap: 100000,
    ngaygianhap: "1/1/2023",
});
addHoivien({
    name: "nguyen van a",
    tuoi: 19,
    diachi: "HN",
    goitap: 1000000,
    ngaygianhap: "1/2/2023",
});
addHoivien({
    name: "nguyen van b",
    tuoi: 25,
    diachi: "BG",
    goitap: 5000000,
    ngaygianhap: "1/4/2023",
});
addHoivien({
    name: "phan dong",
    tuoi: 31,
    diachi: "HN",
    goitap: 2000000,
    ngaygianhap: "1/5/2023",
});
const update = (ten, tuoi, diachi, goitap, ngaygianhap) => {
    const x = hoivien.find((e) => e.name === ten);
    if (x) {
        (x.name = ten),
            (x.tuoi = tuoi),
            (x.diachi = diachi),
            (x.goitap = goitap),
            (x.ngaygianhap = ngaygianhap);
    }
};
update("phan dong", 29, "bg", 500, "1/1/2024");
console.log(hoivien);

function tinhtong() {
    let tong = 0;
    hoivien.forEach((x) => {
        tong += x.goitap;
    });
    return tong;
}
console.log(tinhtong());
