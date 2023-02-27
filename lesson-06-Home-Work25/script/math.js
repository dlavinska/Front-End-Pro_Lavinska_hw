class SuperMath {
    check(obj) {
        this.X = obj.X;
        this.Y = obj.Y;
        this.znak = obj.znak;

        let question = confirm(`Чи хочете зробити дану дію ${this.znak} з такими числами ${this.X} і ${this.Y}?`);
        if (question === true) {
            this.math();
        } else {
            this.input();
            this.math();
        }

    }

    input() {
        this.znak = prompt("Оберіть іншу дію над заданими числами. Можливі варіанти znak: +, -, *, /, %", "");

        let question2 = confirm("Хочете змінити значення X і Y?");
        if (question2 === true) {
            this.X = +prompt("Введіть інше число X", "");
            this.Y = +prompt("Введіть інше число Y", "");
        } else {
            return this.znak;
        }

    }

    math() {
        let mathOperation;

        switch (this.znak) {
            case "+":
                mathOperation = this.X + this.Y;
                break;
            case "-":
                mathOperation = this.X - this.Y;
                break;
            case "/":
                mathOperation = this.X / this.Y;
                break;
            case "*":
                mathOperation = this.X * this.Y;
                break;
            case "%":
                mathOperation = this.X % this.Y;
                break; 
            default:
                mathOperation = "Ви ввели знак якого не існує";
                break; 
        }

        console.log(mathOperation);

    }

}

const obj = { X: 9, Y: 4, znak: "*" }; 

let p = new SuperMath();

p.check(obj);

console.log(p);