//1
const randomArr = [...Array(15)].map(() =>
    Math.floor(Math.random() * 20)
);
//2
let results = randomArr.filter(function (num) {
    return num % 3 === 0;
});

//3
let bool= false;
for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] > 7) {
        bool=true;
        console.log(randomArr[i]);
        break;
    }
}
if (!bool) {
    console.log('Все числа меньше 7');
}

//4
let newArr = randomArr.map((x) => x * 2);

//5
let sum = 0;
for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] % 2 === 0) {
        sum += randomArr[i];
    }
}

console.log(randomArr);
console.log(results);
console.log(newArr);
console.log(sum);

//6
console.log(randomArr.shift());
//7
console.log(randomArr.pop());

//со звездочкой

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

let filterArray=arrayOne.filter(el=>arrayTwo.includes(el));
console.log(filterArray);
