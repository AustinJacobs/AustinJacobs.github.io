
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let fullname = getParameterByName("fullname");

document.getElementById("fullname").innerHTML = fullname;

let email = getParameterByName("email");

document.getElementById("email-form").innerHTML = email;

let phone = getParameterByName("phone");

document.getElementById("phone-form").innerHTML = phone;

let country = getParameterByName("country");

document.getElementById("country-form").innerHTML = country;

let date = getParameterByName("date");

document.getElementById("date-form").innerHTML = date;

let rental = getParameterByName("rental-type");

document.getElementById("type-form").innerHTML = rental;

let length = getParameterByName("period");

document.getElementById("period-form").innerHTML = length;

let passengers = getParameterByName("passengers");

document.getElementById("passengers-form").innerHTML = passengers;

let cruise = getParameterByName("cruise");

document.getElementById("cruise-form").innerHTML = cruise;

let ship = getParameterByName("ship");

document.getElementById("cruise-ship-form").innerHTML = ship;

let comments = getParameterByName("comments");

document.getElementById("comments-form").innerHTML = comments;
