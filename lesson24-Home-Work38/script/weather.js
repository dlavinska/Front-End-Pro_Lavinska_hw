const api = {
    key: "&units=metric&APPID=5d066958a60d315387d9492393935c19",
    base: "http://api.openweathermap.org/data/2.5/weather?q="
};

const iconURL = "http://openweathermap.org/img/w/";

const searchBtn = document.querySelector(".search-city-btn");
const cityValue = document.querySelector(".search-box");
const widget = document.querySelector(".container");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temperature = document.querySelector(".temp");
const pressure = document.querySelector(".pressure");
const weatherDescr = document.querySelector(".weather-description");
const humidity = document.querySelector(".humidity");
const speedWind = document.querySelector(".speed");
const degWind = document.querySelector(".deg");
const weatherPict = document.querySelector(".icon");
const highLowDiv = document.querySelector(".hi-low");
const error = document.querySelector(".error");
const form = document.querySelector(".form");

function getData(cityName) {
    fetch(`${api.base}${cityName}${api.key}`)
        .then(response => response.json())
        .then(data => {
            showData(data);
            cityValue.value = "";
            cityValue.focus();
        })
        .catch(() => {
            error.innerHTML = "You enter not valid city. Please, enter again";
            cityValue.value = "";
            showElement(error);
            hideElement(widget);
            cityValue.focus();
        });
}

function showData(data) {
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    date.innerHTML = showDate();
    temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
    pressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;
    weatherPict.src = `${iconURL}${data.weather[0].icon}.png`;
    weatherDescr.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `
        <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-humidity-plants-flaticons-lineal-color-flat-icons.png"/>
        Humidity: ${data.main.humidity}%
        `;
    speedWind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    degWind.innerHTML = `Wind direction: ${data.wind.deg}°`;
    highLowDiv.innerHTML = `Max-temperature: ${Math.round(data.main.temp_max)}°c / Min-temperature: ${Math.round(data.main.temp_min)}°c`;
}

function showDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const now = new Date();

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const date = now.getDate();

    return `${day} ${date} ${month} ${year}`;
}

function displayWeather() {
    const searchInputValue = cityValue.value;
    
    getData(searchInputValue);
    showElement(widget);
}

function eventSearchInput(event) {
    if (event.keyCode === 13) {
        displayWeather();
    }
}

cityValue.addEventListener("keypress", eventSearchInput);
searchBtn.addEventListener("click", displayWeather);

function showElement(element) {
    element.classList.add("show");
    element.classList.remove("hide");
}

function hideElement(element) {
    element.classList.remove("show");
    element.classList.add("hide");
}