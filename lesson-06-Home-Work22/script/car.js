class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get humanInfo() {
        console.log(`Ім\'я: ${this.name}. Вік: ${this.age} років(-ки).`);
    }
}

class Car {
    constructor(brand, model, year, registrationnumber) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.registrationnumber = registrationnumber;
    }

    owner = {};

    addOwner(human) {
        if (human.age < 18) {
            console.log(`Вам ще немає 18 років, власником авто має бути людина більше 18 років`);
        } else {
            this.owner = human;
        }
    }

    get info() {
    
        console.log(`Інформація про машину:
        *бренд - ${this.brand}
        *модель - ${this.model}
        *рік випуску - ${this.year}
        *реєстраційний номер - ${this.registrationnumber}`);
        
        if (this.owner) {
            this.owner.humanInfo;
        } else {
            console.log(`У ${this.brand}-${this.model} власника немає`);
        }
    }
}

// Створюємо декілька екземплярів людей

let humanone = new Human("Олексій", 16);
let humantwo = new Human("Ганна", 25);
let humanthree = new Human("Олександр", 30);
let humanfour = new Human("Тамара", 29);

// Створюємо декілька екземплярів авто

let carone = new Car("Renault", "Sandero", 2020, "BE8251EP");
let cartwo = new Car("Hyundai", "Sonata", 2018, "BC7985OH");
let carthree = new Car("Toyota", "Camry Premium", 2021, "AA1441MP");
let carfour = new Car("Peugeot", "308", 2017, "AT4319HI");

// Присвоюємо власників авто

carone.addOwner(humanone);
cartwo.addOwner(humanthree);
carthree.addOwner(humantwo);
carfour.addOwner(humanfour);

// Виводимо інформацію про авто

carone.info;
cartwo.info;
carthree.info;
carfour.info;