const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

document.querySelector(".array").innerHTML = array.join(", ");

// Завдання 13.1

const resultSum = array.reduce(function(sum, elem) {
	if (elem >= 0) {
        return sum + elem;
    }
    
    else {
		return sum;
	}
});

const count = array.filter(elem => (elem > 0));

document.querySelector(".sum-positive").innerHTML = `Сума позитивних елементів: ${resultSum}`;

document.querySelector(".count-positive").innerHTML = `К-ть позитивних елементів: ${count.length}`;

// Завдання 13.2

const minimalElem = Math.min.apply(null, array);

document.querySelector(".minimal-number").innerHTML = `Мінімальний елемент масиву: ${minimalElem}`;
document.querySelector(".minimal-number-index").innerHTML = 
`Порядковий номер мінімального елементу масиву:
 ${array.indexOf(minimalElem)}
`;

// Завдання 13.3

const maxElem = Math.max.apply(null, array);

document.querySelector(".max-number").innerHTML = `Максимальний елемент масиву: ${maxElem}`;
document.querySelector(".min-number-index").innerHTML = 
`Порядковий номер максимального елементу масиву:
 ${array.indexOf(maxElem)}
`;

// Завдання 13.4

const countNegative = array.filter(elem => (elem < 0));

document.querySelector(".count-negative").innerHTML = `К-ть негативних елементів: ${countNegative.length}`;

// Завдання 13.5

const numberOfPositiveOdd = array
.map((elements) => parseInt(elements))
.filter((number) => number % 2 && number > 0);

document.querySelector(".count-positive-odd").innerHTML =
`К-ть непарних позитивних елементів: ${numberOfPositiveOdd.length}`;

// Завдання 13.6

const numberOfPositiveEven = array
.map((elements) => parseInt(elements))
.filter((number) => number % 2 === 0 && number > 0);

document.querySelector(".count-positive-even").innerHTML =
`К-ть парних позитивних елементів: ${numberOfPositiveEven.length}`;

// Завдання 13.7


const sumEven = array.reduce(function(sum, elem) {
	if (elem >= 0 && elem % 2 === 0) {
        return sum + elem;
    }

    else {
		return sum;
	}
});

document.querySelector(".sum-positive-even").innerHTML =
`Сума парних позитивних елементів: ${sumEven}`;


// Завдання 13.8


function sumPlus (array) {
  return array.filter(i => i > 0 && i % 2 === 1).map(i => sumodd += i, sumodd = 0).reverse()[0];
}

document.querySelector(".sum-positive-odd").innerHTML = `Сума непарних позитивних елементів: ${sumPlus(array)}`;

// Завдання 13.9

const multEven = array.reduce(function(mult, num) {
	if (num >= 0) {
    return mult * num;
  }
    
  else {
		return mult;
	}
});

document.querySelector(".mult-positive").innerHTML = `Добуток позитивних елементів: ${multEven}`;

// Завдання 13.10

const result = array.map(value => value === maxElem ? value : 0);

document.querySelector(".max-in-array").innerHTML = `Максимальний елемент масиву, а інші обнулені: ${result.join(", ")}`;
