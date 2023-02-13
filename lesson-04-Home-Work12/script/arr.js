const arr = [];
const lengthArr = +prompt("Введіть довжину масиву", "");

for (let i = 0; i < lengthArr; i++) {
    arr[i] = +prompt(`Введіть ${i+1} число`, "");
}

document.querySelector(".add-array").innerHTML = arr.join(", ");

arr.sort((a, b) => a - b);
document.querySelector(".sorted-array").innerHTML = arr.join(", ");

arr.splice(1, 4);
document.querySelector(".deleted-some-elems-array").innerHTML = arr.join(", ");