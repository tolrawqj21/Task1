//1
let frameworks =['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS','Vue.js');
frameworks.splice(2,0,'CommonJS');
console.log(frameworks);

let newFrameworks =frameworks.indexOf('jQuery');
if(newFrameworks!==-1){
    let arr= frameworks.splice(newFrameworks,1)
    console.log(`Это здесь лишнее ${arr}` );
}


//2
const removeNegativeElements = array => array.filter(value => typeof value === 'number' ? !(value < 0) : true);

console.log(removeNegativeElements([-9, 2, 3, 0, -28, 'value']));
console.log(removeNegativeElements([-9, -21, -12]));
console.log(removeNegativeElements(['-102', 102]));


//3
let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false];
let result = [];
function getStringElements(array){
    for(let i=0; i< array.length; i++){
        if(typeof array[i] != "string"){

        }else {
            result.push(array[i]);
        }
    }
    console.log(result);
}
getStringElements(arr);


//4
function sumRecursion(arr) {
    let sum = arr.shift();
    if (arr.length !== 0) {
        sum += sumRecursion(arr);
    }
    return sum;
}
const randomArr = [...Array(10)].map(() =>
    Math.floor(Math.random() * 11));
console.log(randomArr);
console.log(sumRecursion(randomArr));

//5
const arr = [0, 2, 4, 5, 7, 10, 2, 35, 6, 10, 3];
let res=sumRecursion10(arr);
function sumRecursion10(array, acc=0) {
    if(!array.length){
        return acc;
    }
    const el=array.shift()
    {
        if (el === 10) {
            acc += el;
        }
    }
        return sumRecursion10(array,acc);
    }
console.log(res);

//6
const arr = [0, 2, 4, 5, 7, 10, 2, 35, 6, 10, 3];
let res = recursionMore5(arr);

function recursionMore5(array, acc = []) {
    if (!array.length) {
        return acc;
    }
    const el = array.shift();
    {
        if (el > 5) {
            acc.push(el);
            return recursionMore5(array, acc);

        } else return recursionMore5(array, acc);
    }
}
console.log(res);

