fetch("json/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {

        // document.getElementById("name").innerHTML = jsObject[0].halfdayone;
        // let forecast_number = 0;

        let prices = document.querySelectorAll(".metro");
        let count = 0;

        for (item in jsObject) {
            prices[count].innerHTML = jsObject[count].halfdayone;

            count++
        }
    });

fetch("json/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {

        let prices_two = document.querySelectorAll(".metro2");
        let count = 0;

        for (item in jsObject) {
            prices_two[count].innerHTML = jsObject[count].fulldayone;

            count++
        }
    });

fetch("json/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {

        let prices_three = document.querySelectorAll(".metro3");
        let count = 0;

        for (item in jsObject) {
            prices_three[count].innerHTML = jsObject[count].halfdaytwo;

            count++
        }
    });

fetch("json/rentals.json")
    .then((response) => response.json())
    .then((jsObject) => {

        let prices_four = document.querySelectorAll(".metro4");
        let count = 0;

        for (item in jsObject) {
            prices_four[count].innerHTML = jsObject[count].fulldaytwo;

            count++
        }
    });