//1
function fillArray(lenght,value) {
let arr=[],i =lenght;
while(i--){
    arr[i]=value;
}
return arr;
}
console.log(fillArray(10,'qwerty'));

//2
const array = [0, 1, 2, null, undefined, 'qwerty', false];
console.log(filterArray(array, false, undefined, '', 0, null));

function filterArray(element, ...args) {
return array.filter(args=>{
    return args ;
})
}
//3

function calcSum(num1, num2, ...args) {

    let sum1 = num1 + num2;
    for (let arg of args) {
        sum1 += arg;
    }
    return sum1;
}
console.log(calcSum(1, 2, 6, 5));
console.log(calcSum(8, 2, 6, 10));
console.log(calcSum(5, 2, 6, 4));

//4
function createPipe(x) {
    return function (y,f = '=====') {
        return f + x + f;
    }
}
const pipeFunction = createPipe('some text you like');
console.log(pipeFunction(createPipe()));



//5
function outputFunctioConsole(text) {
    console.log(text);
}

const outputFunctioAlert = (text) => {
    alert(text);
};

function display(a, b, func1, func2) {
    const res = a + b;
    if (res > 8) {
        func1(res);
    } else {
        func2(res);
    }
}
display(5, 7, outputFunctioConsole, outputFunctioAlert);
display(4, 1, outputFunctioConsole, alert);


//5 Это был первый вариант
//   function display(text, text2){
//   let multi =text*text2;
//   return multi;
//   }
// console.log(display(5,8));
// alert(display(4,6))











