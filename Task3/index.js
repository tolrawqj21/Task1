//1
let name = prompt('What is you name?','');
for (let i=1; i<4; i++) {
    if (i === 3) {
        console.log(`Happy birthday, dear ${name}`);
    }
    console.log('Happy birthday to you');
}

//2
let num = +prompt('Введите число','');
let str='';
for (let i=0; i<num; i++){
    str= str +'.#';
}
console.log(str);

//3
 let sum = 0;
let num = prompt('Введите число', "");

 if(num===""){
 num= prompt("Invalid. You should enter a number",'');
}

for (let i = 1; i <= num; i++) {
    num= Number(num);
    if (i % 2 !== 0) {
        sum += i;
    }
}
console.log(sum);

//4
let i = 0;
while(true) {
    i++;
    if(Math.random() > 0.7) {
        console.log(`Loop was finished because of: ${i}`,
            `Number of iterations:${i++}` );
        break;
    }
}
//5

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Div by 5 and 3');
        continue;
    }
    if (i % 5 === 0) {
        console.log('Div by 5');
        continue;
    }
    if (i % 3 === 0) {
        console.log('Div by 3');
        continue;
    }
    console.log(i);
}


//6
let x = new Date();
let currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
console.log(currentTimeZoneOffsetInHours);
console.log(x);