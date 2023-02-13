// Домашнє завдання 10 пункт 1:

const arr = [];

for (let i = 10; i <= 20; i++) {

    arr.push(i);

}

document.getElementById("elements").innerHTML = arr.join(", ");


// Домашнє завдання 10 пункт 2:

const array = [];

for (let i = 10; i <= 20; i++) {
    array.push(Math.pow(i,2));
}

document.getElementById("querty").innerHTML = array.join(", ");

// Домашнє завдання 10 пункт 3:

for (let i=1; i<=10; i++) {
    const j = 7;
    console.log(`7 × ${i} = ${i * j}`);
}

// Домашнє завдання 10 пункт 4:

function sumTo() {

    let sum = 0;
    
    for (let i = 1; i <= 15; i++) {
        sum += i;

        document.getElementById("sum").innerHTML = sum;
    }

}

// Домашнє завдання 10 пункт 5:

function fn1() {

    let mult = 1;

    for (let i = 15; i <= 35; i++) {

        mult *= i;

        document.getElementById("one").innerHTML = mult;
    }
}

// Домашнє завдання 10 пункт 6:

function avarage() {
    let num = 0;
    let avar;

    for (let i = 1; i <= 500; i++) {

        num += i;
        avar = num / 500;

        document.getElementById("av").innerHTML = avar;
    }
}

// Домашнє завдання 10 пункт 7:

function sumEven() {

    let sum = 0;

    for (let i = 30; i <= 80; i++){
        
        if (i % 2 == 0){
            sum += i;
        }
    }
    
    document.getElementById("even").innerHTML = sum;
}

// Домашнє завдання 10 пункт 8:

let numbers = [];

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
    numbers.push(i);
    } 
}

document.getElementById("three").innerHTML = numbers;

// Домашнє завдання 10 пункт 9, 10, 11

const naturalNumber = +prompt("Введіть будь-яке натуральне число", " ");

document.getElementById("natural-number").innerHTML = `Ви ввели число: ${naturalNumber}`;

let count = 0;
let summ = 0;
let arrDividers = [];
  
for (let i = 0; i <= naturalNumber; i++) {

    if (naturalNumber % i == 0) {
        arrDividers.push(i);

        document.getElementById("dividers").innerHTML = `Дільники данного числа: ${arrDividers}`;

    if (i % 2 === 0) {
        count++;
        summ += i;
    }
  }
}

document.getElementById("evendividers").innerHTML = `Кількість парних дільників: ${count}`;

document.getElementById("sumevendividers").innerHTML = `Сума парних дільників: ${summ}`;


// Домашнє завдання 10 пункт 12:

let i = 1, j; 
    
document.write('<br><table style="text-align: center;">');
document.write('<caption style = "width: 600px; padding-bottom: 10px;"> <b>10.12. Таблиця множення </b></caption>');
    
while (i <= 10) {
    document.write("<tr>");
    j = 1; 

while (j <= 10) {
        
    document.write("<td>" + j + "×" + i + "=" + (i * j) + "</td>");
    j++
}
    document.write("</tr>");
    i++
}

    document.write("</table>");