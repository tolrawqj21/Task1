//первый вариант
const object = {
    a: 5,
    b: { g: 8, y: 9, t: { q: 48 } },
    x: 47

}
const newObj=Object.assign({},object);

console.log(object);
console.log(newObj);


//2 вариант
function copy(object) {
    let objCopy = {};
    let key;

    for (key in object) {
        objCopy[key] = object[key];
    }
    return objCopy;
}
const object = {
    a: 5,
    b: {g: 8, y: 9, t: {q: 48}},
    x: 47
}
console.log(copy(object));


//3 вариант
const object = {
    a: 5,
    b: { g: 8, y: 9, t: { q: 48 } },
    x: 47
}
let newObj = JSON.parse(JSON.stringify(object));

object.a=15;
console.log(object);
console.log(newObj);