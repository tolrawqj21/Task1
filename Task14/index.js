// //1
// let promise = new Promise(function (resolve) {
//     setTimeout(() => resolve("Hello!"), 3000);
// });
// promise.then(console.log);
//
// //2
// num = new Promise(function (resolve, reject) {
//     let num = Math.ceil(Math.random() * 10);
//     console.log(num);
//     if (num % 2 === 0) {
//         setTimeout(() => resolve("Complete!"), 2000);
//     } else {
//         setTimeout(() => reject("Error!"), 1000);
//     }
// });
// num.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });
//
// //3
//
// async function delay(ms) {
//
//     return new Promise(resolve => setTimeout(resolve, ms));
//
// }
//
// console.log('first call');
// await delay(4000);
// console.log('second call');



