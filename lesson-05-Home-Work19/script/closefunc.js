function sumTo(number) {
   
    return function (number2) {
        return number += number2;
    }
}

const sum = sumTo(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));