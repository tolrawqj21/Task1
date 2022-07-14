//1
function colorBackground(){
    let p=document.querySelector('#main');
p.lastElementChild.style.backgroundColor='yellow';
}
colorBackground();

// 1.2
function wrap (){
    let block1= document.querySelector("#footer");
    block1.style.order='2';
}
wrap();


//2

svetofor();
function svetofor() {
    let threeColor=document.querySelector("#green");
    let oneColor = document.querySelector("#red");
    oneColor.style.backgroundColor = 'red';
    threeColor.style.backgroundColor = 'black';
    let twoColor;

    setTimeout(() => {
        twoColor = document.querySelector("#yellow");
        twoColor.style.backgroundColor = 'yellow';
        oneColor.style.backgroundColor = 'black';
    }, 3000);

    setTimeout(() => {
         threeColor = document.querySelector("#green");
        threeColor.style.backgroundColor = 'green';
        twoColor.style.backgroundColor = 'black';
    }, 6000);
}
setInterval(svetofor, 9000);


//3
let table = document.querySelector('#table')
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function fillTable(table, arr) {
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        for (let k = 0; k < arr[i].length; k++) {
            let td = document.createElement('td');
            td.innerHTML=arr[i][k];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
fillTable(table,arr);
