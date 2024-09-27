const key = "790d40eda2e2c854fe34ea672e59db03";

function search(){
    let city = document.querySelector(".text-city").value;
    insertInto(city);
}

async function insertInto(city){
    let dates = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(answer => answer.json());
    let infoWeather = document.querySelector(".info-weather");
    infoWeather.classList.add("active");
    console.log(dates)
    document.querySelector(".city-name").innerHTML = "Em " + dates.name;
    document.querySelector(".temp").innerHTML = Math.floor(dates.main.temp) + "°C";
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${dates.weather[0].icon}.png`;
    document.querySelector(".weather").innerHTML = dates.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Humidade " + dates.main.humidity + "%";
}