// Завдання 11.1:

let row = "";
for (let i = 20; i <= 30; i = i + 0.5) {
  row += i + " ";
}

document.getElementById("task-one").innerHTML = row.trim();

// Завдання 11.2:

let dollar = "";
for (let i = 10; i <= 100; i = i + 10) {

    dollar += `${i} $ = ${i*27} грн.` + "<br>";

}

document.getElementById("task-two").innerHTML = dollar.trim();

// Завдання 11.3:

const N = parseInt(prompt("Введіть ціле число, щоб дізнатися всі цілі числа від 1 до 100, квадрат яких не перевищує введеного числа:", ""));

const arr = [];

for (let i = 1; i <= 100; i++) {
  if (i <= Math.sqrt(N)) {
    arr.push(i);
  }
}

document.getElementById("task-three").innerHTML = arr.join(" ");

// Завдання 11.4:

const n = parseInt(prompt("Введіть ціле число щоб дізнатися чи воно просте чи ні", ""))
function simpleNumber(n) {
  
  if (n < 2) {
    return "Число має бути більше 1";
  }
  
  else if (n === 2) {
    return "Просте число";
  }

  let i = 2;
  const limit = Math.sqrt(n);

  while (i <= limit) {
    if (n % i === 0) {
      return "Не просте число";
    }
    i +=1;
  }
  
  return "Просте число";
}

document.getElementById("task-four").innerHTML = simpleNumber(n);

// Завдання 11.5:

let number = Number(prompt("Введіть число і дізнайтесь чи можна одержати це число шляхом зведення числа 3 у деякий ступінь", ""));

while (number % 3 == 0) {
  number /= 3;
}

if (number == 1) {
  console.log("Дане число можна одержати шляхом зведення числа 3 в деякий ступінь");
}

else {
  console.log("Дане число не можна одержати шляхом зведення числа 3 в деякий ступінь");
}