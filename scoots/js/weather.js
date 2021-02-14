// Weather API Weather Summary

let URL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=";

let cityID = "3530103";

let key = "2fcc76035c8ea35fae12e45da49246aa";

let requestURL = URL + cityID + "&appid=" + key;

const apiURL = requestURL;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);

        document.getElementById('description').textContent = jsObject.weather[0].description;

        document.getElementById('humidity').textContent = jsObject.main.humidity;

        document.getElementById('wind').textContent = Math.round(jsObject.wind.speed);
    });