// Weather API Five day forecast

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=";

let cityIdentification = "3530103";

let APIkey = "2fcc76035c8ea35fae12e45da49246aa";

let requestedURL = forecastURL + cityIdentification + "&appid=" + APIkey;

const weatherURL = requestedURL;
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {

        let forecast = document.getElementById("f-temp");

        forecast.textContent = Math.round(jsObject.list[37].main.temp, 0);
    });