//1
let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function () {
        this.aSide = +prompt('Введите число', '');
        this.bSide = +prompt('Введите число', '');
        this.cSide = +prompt('Введите число', '');
    },
        getPerimeter: function  () {
            return this.aSide + this.bSide + this.cSide;
        },
        isEqualSides: function () {
        return this.aSide===this.bSide&&this.bSide===this.cSide;
        },
    }
triangle.setValues();
console.log(triangle.getPerimeter());
console.log(triangle.isEqualSides());

//2
let calculator ={
    x:0,
    y:0,
    read: function (){
         this.x = +prompt('Введите число','');
         this.y = +prompt('Введите число','');
    },
    sum: function (){
return this.x+ this.y;
    },
    multi: function (){
        return this.x*this.y;
    },
    diff:function (){
        return this.x- this.y;
    },
    div: function (){
        return this.x/ this.y;
    }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.diff());
console.log(calculator.multi());
console.log(calculator.div());

//3
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    debugger
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country,['[',']']); // [Ukraine]
format.call(country.capital,'',''); // Kyiv
format.apply(country.capital,['','']); // Kyiv
format.apply('',['','']); // undefined

//4
var text = 'outside';

function logIt() {
    console.log(text);
    var text = 'inside';
};
logIt();
// данный код выведет undefined, потому что оно инициализируется первой компиляцией со значением undefined, и не идет дальше
