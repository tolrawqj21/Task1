//1
const num = 15;
console.log(`${num.toString(16)} . ${num.toString(2)}`);


//2
const res= parseInt(prompt());

console.log(res+2);
console.log(res*2);
console.log(res/2);
console.log(res-2);

//3
const text = prompt();
console.log(text.length);

//4
const num =  0.51000002;
console.log(+num.toFixed(2)+2);

///Строки
//5
const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps'
console.log(str.indexOf(str_two));
console.log(str.toUpperCase());

//Логические операции
//6
const a = 1, b = 2, c = 3, d = 3;

console.log (a>b);
console.log (b<c);
console.log (c>d);
console.log (a>b||b<c||c>d);


console.log (a<b);
console.log (b<c);
console.log (c<=d);
console.log((a<b && b<c && c<=d));


//7
console.log (2 =="2");
console.log (2 ==="2");

let banana;
console.log(banana?? "Apple");



