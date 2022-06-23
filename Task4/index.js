//1
// const dataTypes = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];
// let numbers = [];
// const termNum = 3;
// dataTypes.forEach(element => console.log(typeof element));
//
// dataTypes.forEach(function (element) {
//     if (typeof element === 'number') numbers.push(element);
// });
// console.log(numbers);
//
// // const res = numbers.map(x => x + termNum);
//
//  const res = numbers.reduce
// console.log(res);

//2
// let num= prompt('Введите целое число','');
// let arr=[];
// for(let i=0; i<num; i++){
//     arr.push (Math.floor(Math.random()*10))
// }
// console.log(arr);
//
// let arr_2= [...arr];
// console.log(arr_2);
// for(let i=2; i<arr_2.length; i+=3){
//   arr_2[i]*=3;
// }
// console.log(arr_2);

//3
// let student1= {
//     firstName: 'Ira',
//     lastName:'Umniakova',
//     mark: 10
// };
// console.log(student1);
// let student2 ={...student1, mark: 12};
// console.log(student2);
//
// let student3= Object.assign({}, student1, {mark: 100});
// console.log(student3);
//
// let marks= (student1.mark+student2.mark+student3.mark)/3;
// console.log(marks);
//
// console.log(student1.mark);
// console.log(student2.mark);
// console.log(student3.mark);
//
// for(let key in student1){
// console.log(key,student1[key]);
// }