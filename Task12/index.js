//^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$ для емаил
// [A-Za-z] Только буквы
// /^\+38\d{3}\d{3}\d{2}\d{2}$/для номера телефона
//1
function validLetter(){
    let letter = document.getElementById('letterInput').value;
    let pattern= /[A-Za-z]/;
    if( pattern.test(letter) )
        console.log('ok');
    else
        console.log('fail');
}
function validPhone(){
    let numberPhone = document.getElementById("phoneInput").value;
    let pattern3=/^\+38\d{3}\d{3}\d{2}\d{2}$/;
    if( pattern3.test(numberPhone) )
        console.log('ok');
    else
        console.log('fail');
}
function validMail(){
    let email = document.getElementById("mailInput").value;
    let pattern2=/([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if( pattern2.test(email) )
        console.log('ok');
    else
        console.log('fail');
}


//2//3
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let myColor = 'green';
document.getElementById('color1').oninput = function () {
    myColor = this.value;
}
document.getElementById('color2').oninput = function () {
    myColor = this.value;
}
document.getElementById('color3').oninput = function () {
    myColor = this.value;
}
ctx.moveTo(0, 0);
ctx.lineWidth = 5;
canvas.onmousedown = function () {
    canvas.onmousemove = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.fillRect(x-15, y - 2, 10, 10);
        ctx.fillStyle = myColor;
        ctx.fill();
    }
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}
//4
let url='https://www.youtube.com/?gl=UA&hl=ru';
let regex= /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
if( regex.test(url) )
    console.log('ok');
else
    console.log('fail');