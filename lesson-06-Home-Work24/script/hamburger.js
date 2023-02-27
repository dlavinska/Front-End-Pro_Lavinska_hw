class Hamburger {
    static SIZE_SMALL = "SMALL";
    static SIZE_HUGE = "HUGE";
    static STUFFING_CHEESE = "CHEESE";
    static STUFFING_SALAD = "SALAD";
    static STUFFING_POTATO = "POTATO";
    static TOPPING_SAUCE = "SAUCE";
    static TOPPING_MAYO = "MAYO";

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
        this.createTablePricesAndCalories();
    }

    createTablePricesAndCalories() {
        this.pricesAndCalories = {};
        let pc = this.pricesAndCalories;
 
        pc[Hamburger.SIZE_HUGE] = {price: 100, calories: 40};
        pc[Hamburger.SIZE_SMALL] = {price: 50, calories: 20};
 
        pc[Hamburger.STUFFING_CHEESE] = {price: 10, calories: 20};
        pc[Hamburger.STUFFING_SALAD] = {price: 20, calories: 5};
        pc[Hamburger.STUFFING_POTATO] = {price: 15, calories: 10};
 
        pc[Hamburger.TOPPING_SAUCE] = {price: 15, calories: 0};
        pc[Hamburger.TOPPING_MAYO] = {price: 20, calories: 5};
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculateCalories() {
 
        let calories = 0;
        let arr = this.pricesAndCalories;
        calories += arr[this.size].calories;
        calories += arr[this.stuffing].calories;
 
        for (let i = 0; i < this.toppings.length; i++) {
            calories += arr[this.toppings[i]].calories;
        }
 
        return calories;
    }

    calculatePrice() {
 
        let price = 0;
        let arr = this.pricesAndCalories;
        price += arr[this.size].price;
        price += arr[this.stuffing].price;
 
        for (let i = 0; i < this.toppings.length; i++) {
            price += arr[this.toppings[i]].price;
        }
 
        return price;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// запитаємо скільки калорій без майонезу
console.log("Calories: " + hamburger.calculateCalories());

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій з майонезом
console.log("Calories with MAYO: " + hamburger.calculateCalories());

// Вартість гамбургера з обраними інгрідієнтами
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер калорій?
console.log("Calories with sauce: " + hamburger.calculateCalories());

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());