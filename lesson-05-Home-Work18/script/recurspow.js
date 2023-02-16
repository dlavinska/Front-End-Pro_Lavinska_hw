const num = +prompt("Введіть число, яке треба піднести до ступеня");
const degree = +prompt("Введіть ступінь до якого треба піднести число");

function pow(num, degree) {
  if (degree == 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
    

}

alert(pow(num, degree));