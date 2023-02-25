class Human {
    name;
    gender;

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment  {
    livedperson = [];

    addLivedpersons(person) {
       this.livedperson.push(person);
    }

}

class House {
    apartments = [];
    maxnumberapartment;

    constructor(maxnumberapartment) {
        this.maxnumberapartment = maxnumberapartment;
    }

    addApartments(apartment) {
        if (this.apartments.length >= this.maxnumberapartment) {
            console.log(`Кількість квартир не може перевищувати ${this.maxnumberapartment}`);
        } else {
            return this.apartments.push(apartment);
        }
        
    }

}

// Демонстрація роботи коду

// Створюємо декілька екземплярів класу Human(Людина)

let humanone = new Human("Lesya", "female");
let humantwo = new Human("Viktor", "male");
let humanthree = new Human("Olena", "female");
let humanfour = new Human("Serhiy", "male");

// Створюємо декілька екземплярів класу квартира (Appartment) і додаємо екземпляри класу Людина до екземплярів класу Apartment(Квартира)

let aparrtone = new Apartment();
aparrtone.addLivedpersons(humanone);
aparrtone.addLivedpersons(humantwo);
let aparrtwo = new Apartment();
aparrtwo.addLivedpersons(humanthree);
let aparrthree = new Apartment();
aparrthree.addLivedpersons(humanfour);
let aparrfour = new Apartment();

// Створюємо екземпляр класу Квартира з максимальною кількістю квартир і додаємо екземпляри класу Apartment(Квартира) до екземплярів класу House(Будинок)

let houseOne = new House(3);

houseOne.addApartments(aparrtone);
houseOne.addApartments(aparrtwo);
houseOne.addApartments(aparrthree);
houseOne.addApartments(aparrfour);

console.log(houseOne);