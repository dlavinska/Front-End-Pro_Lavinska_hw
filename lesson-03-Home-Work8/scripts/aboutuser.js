let year = prompt("Який Ваш рік народження? (Введіть числом)", " ");
let city = prompt("В якому місті Ви живете? (Введіть місто з першої великої літери)", " ");
let sport = prompt("Який Ваш улюблений вид спорту?", " ");

// Умови для кількості років

let age;
let calculate;

if (year === null) {
    age = "Шкода, що Ви не захотіли ввести свій рік народження";
}

else if (year === " ") {
    age = "Це поле було обов'язковим. Шкода, що Ви не захотіли ввести свій рік народження.";
}

else if (year) {
    calculate = 2023 - Number(year);
    age = `Тобі ${calculate} роки(-ів)`;
}

// Умови для міст

let cityFrom;

if (city === null) {
    cityFrom = "Шкода, що Ви не захотіли ввести своє місто";
}

else if (city === " ") {
    cityFrom = "Це поле було обов'язковим. Шкода, що Ви не захотіли ввести своє місто.";
}

else if (city === "Київ") {
    cityFrom = "Ти живеш у столиці України";
}

else if (city === "Вашингтон") {
    cityFrom = "Ти живеш у столиці Америки";
}

else if (city === "Лондон") {
    cityFrom = "Ти живеш у столиці Англії";
}

else {
    cityFrom = `Ти живеш у місті ${city}`;
}


// Умови для видів спорту

let sportChooise;

if (sport === null) {
    sportChooise = "Шкода, що Ви не захотіли ввести свій улюблений вид спорту";
}

else if (sport === " ") {
    sportChooise = "Це поле було обов'язковим. Шкода, що Ви не захотіли ввести свій улюблений вид спорту.";
}

else if (sport === "Теніс") {
    sportChooise = "Круто! Хочеш стати Іваном Май?";
}
else if (sport === "теніс") {
    sportChooise = "Круто! Хочеш стати Іваном Май?";
}

else if (sport === "Футбол") {
    sportChooise = "Круто! Хочеш стати Ліонелем Мессі?";
}
    
else if (sport === "футбол") {
    sportChooise = "Круто! Хочеш стати Ліонелем Мессі?";
}

else if (sport === "Гімнастика") {
    sportChooise = "Круто! Хочеш стати Ребекою Андраде?";
}
    
else if (sport === "гімнастика") {
    sportChooise = "Круто! Хочеш стати Ребекою Андраде?";
}

else {
    sportChooise = `Твій улюблений вид спорту: ${sport}`;
}


alert(`${age}\n${cityFrom}\n${sportChooise}`)
