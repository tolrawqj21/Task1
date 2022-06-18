//1
let arr =['455', 87.15, true, undefined, 7, null, 'false',[], {}];
let arr_2=[];
let num=3;
arr.forEach(element => console.log( typeof element));

arr.forEach(function(element) {
    if(typeof element==='number') arr_2.push(element);
});
console.log(arr_2);
let arr_2_2= arr_2.map(x=>x+num);
console.log(arr_2_2);

//2
let num= prompt('Введите целое число','');
let str="";
let arr=[];
for(let i=0; i<=num; i++){

}



//3
let student1= {
    firstName: 'Ira',
    lastName:'Umniakova',
    mark: 10
};
console.log(student1);
let student2 ={...student1, mark: 12};
console.log(student2);

let student3= Object.assign({}, student1, {mark: 100});
console.log(student3);

let marks= (student1.mark+student2.mark+student3.mark)/3;
console.log(marks);

console.log(student1.mark);
console.log(student2.mark);
console.log(student3.mark);

for(let key in student1){
console.log(key,student1[key]);
}