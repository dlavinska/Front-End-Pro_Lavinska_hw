// HW3: task1

const firstName = prompt("Input your first name:", " ");
const lastName = prompt("Input your last name:", " ");
const course = prompt("Input your course:", " ");

alert(firstName.concat(" ").concat(lastName).concat(" ").concat(course));

// HW3: task2

const num = +prompt("Enter a five-digit number", " ");

const arr = [..."" + num];
const number = arr.join(" ");

alert(number);