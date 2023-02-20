// Завдання 17.1

const arr = [56, "fruit", true, "rem", NaN, null, false, undefined, 3, 8, 11, "58", "vegetables"];

function defineAverage(array) {
  const numbers = array.filter(x => typeof x === "number" && !isNaN(x));

    if (numbers.length == 0) {
      return 0;
    }
    

  const sum = numbers.reduce((pre, cur) => pre + +cur);

  return sum / numbers.length;
}

console.log(`Середнє арефметичне числових значень масиву: ${defineAverage(arr)}`);

// Завдання 17.2

const x = +prompt("Введіть перше число");
const y = +prompt("Введіть друге число");
const znak = prompt("Введіть один з цих знаків: +, -, *, /, %, ^ ");

function doMath(x, znak, y) {
    
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        case "^":
            result = Math.pow(x,y);
            break;         
        default:
            result = "Ви ввели знак, якого не існує у функції";
            break;
    }

    return result;


}

alert(doMath(x, znak, y));

// Завдання 17.3

let lengthArr = +prompt("Введіть довжину масиву");
let lengthArr2 = +prompt("Введіть кількість елементів в кожному масиві");

function arrAdd(lengthArr, lengthArr2 ) {

    const arr = [];

    for (let i = 0; i < lengthArr; i++){
        
        arr[i] = [];

        for (let j = 0; j < lengthArr2; j++){

            arr[i][j] = +prompt(`Введіть числове значення ${j + 1} елементу в масиві ${i}`);
        
        }
    }

    return arr;

}

console.log(arrAdd(lengthArr, lengthArr2));

// Завдання 17.4

const str = prompt("Введіть будь-який рядок", "");
const symbols = prompt("Введіть символи, які треба видалити через кому", "l,d");

function deleteSymbols(str, symbols) {


    let textArr = str.split("");
    let symbolArr = symbols.split("");
    symbolArr.join(",");

    for(let i = 0; i < textArr.length; i++) {
        for(let j = 0; j < symbolArr.length; j++) {
            if (textArr[i] === symbolArr[j]) {
                textArr.splice(i, 1);
                i--;
            }
        }
    }

    return textArr.join("");
}


console.log(deleteSymbols(str, symbols));
