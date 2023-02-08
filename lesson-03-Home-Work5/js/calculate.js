const operator = prompt("What do you want to do with the numbers? Write one of this operators (add, sub, mult, div)", " ");

let num1 = prompt("Please, write first number", " ");
num1 = Number(num1);

let num2 = prompt("Please, write second number", " ");
num2 = Number(num2);

let result;

if (operator === "add") {
    result = num1 + num2;

    alert(`${num1} + ${num2} = ${result}`);
}

else if (operator === "sub") {
    result = num1 - num2;

    alert(`${num1} - ${num2} = ${result}`);
}

else if (operator === "mult") {
    result = num1 * num2;

    alert(`${num1} * ${num2} = ${result}`);
}

else if (operator === "div") {
    result = num1 / num2;

    alert(`${num1} / ${num2} = ${result}`);

    if (num2 === 0) {
        alert("You cannot divide by zero");
    }
}

else {
    alert("This operator didn't found");
}
