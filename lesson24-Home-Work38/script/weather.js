const API = "http://api.openweathermap.org/data/2.5/weather?";

const iconURL = "http://openweathermap.org/img/w/";

const searchBtn = document.querySelector(".search-city-btn");
const cityValue = document.querySelector(".search-box");
const error = document.querySelector(".error");

function getData(cityName) {
    const params = new URLSearchParams({
        q: `${cityName}`,
        units: "metric",
        APPID: "5d066958a60d315387d9492393935c19"
    });
    
    const url = `${API}${params.toString()}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            showData(data);
        })
        .catch(() => {
            error.innerHTML = "You enter not valid city. Please, enter again";
            cityValue.value = "";
            showElement(error);
            element.innerHTML = "";
            cityValue.focus();
        });
}

const element = document.querySelector(".main");

function showData(data) {
    element.innerHTML = (
    `
        <div class="container">
            <section class="location">
                <div class="city">${data.name}, ${data.sys.country}</div>
                <div class="date">${formatDate()}</div>
            </section>

            <div class="current">
                <div class="temp">${Math.round(data.main.temp)}°C</div>
                <img class="icon" src="${iconURL}${data.weather[0].icon}.png" alt="weather-pict" style = "width: 100px; height: 100px;">
                <div class="weather-description">${data.main.pressure} hPa</div>
                <div class="pressure">Pressure: ${data.main.pressure} hPa</div>
                <div class="humidity">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-humidity-plants-flaticons-lineal-color-flat-icons.png"/>
                    Humidity: ${data.main.humidity}%
                </div>
                <div class="wind">
                    <p class="speed">Wind speed: ${Math.round(data.wind.speed)} m/s</p>
                    <p class="deg">Wind direction: ${data.wind.deg}°</p>
                </div>
                <div class="hi-low">Max-temperature: ${Math.round(data.main.temp_max)}°c / Min-temperature: ${Math.round(data.main.temp_min)}°c</div>
            </div>
        </div>
    `
    );
    cityValue.value = "";
    cityValue.focus();
}

function formatDate() {
    const now = new Date();

    const day = now.toLocaleString("en-us", {weekday: "long"});
    const month = now.toLocaleString("en-us", {month: "long"});
    const year = now.getFullYear();
    const date = String(now.getDate()).padStart(2, "0");

    return `${day} ${date} ${month} ${year}`;
}

function displayWeather() {
    getData(cityValue.value);
    showData(data);
}

function eventSearchInput(event) {
    const ENTER = "Enter";

    if (event.key === ENTER) {
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