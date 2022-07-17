//1
// let coffeeMachine = {
//     message: 'Your coffee is ready!',
//     start: function() {
//         setTimeout (() => console.log(this.message),3000);
//     },
// }
// coffeeMachine.start(); // 'Your coffee is ready!'
//
// let teaPlease ={
//     message:  'Wanna some tea instead of coffee?'
// }
// coffeeMachine.start.call(teaPlease);

//2
// function concatStr(str1, sep, name) {
//     return str1 + sep + name;
// }
// let hello =concatStr.bind(null,'Hello',' ');
// let checkConcat = concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'
// let finalResult = hello('John') // 'Hello Matt'
// console.log(checkConcat);
// console.log(finalResult);


//3
// function showNumber(min, max,time) {
//
// setTimeout(()=>showNumber(),500)
//        if(min<max){
//            setTimeout()
//        }
// }
// showNumber(5, 10,500);


function showText(num) {
    setTimeout(()=>{
        showText(num);
    }, 2000)
    console.log("Hello");
}

showText(5);


// setTimeout(() => console.log('Привет'), 1000);
// setInterval(() => console.log('Привет'), 5000);


//4
// function addBase(base) {
//     return function (num) {
//         return base + num;
//     };
// }
// let addOne = addBase(1);
// debugger
// alert(addOne(5) + addOne(3));
//выведет 10, потому что вызывается функция в функции


