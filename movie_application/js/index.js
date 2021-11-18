// import shipController from "./ships";

// console.log(shipController.getShips());
// console.log(shipController.getShipByName("Executor"));

// // check to see if javascript is working
// function component() {
//   const element = document.createElement("p");

//   element.innerHTML = "Setup Appears to be working &#128521;";

//   return element;
// }

// document.body.appendChild(component());

// // shipController.getShips().then((data) => {
// //   console.log(data);
// // });

const url = 'http://www.omdbapi.com/?t=Finch&y=2021&apikey=116296b7';

// fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             const jsonData = response.json();
//             console.log(jsonData);
            
//         }
//         throw Error(response.statusText);
//     })
//     .catch(error => console.log('There was an error!', error))


fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        // Create a div where all of the movies and their posters can be stored.
        const movieList = document.getElementById("list");

        // Create a movieInfo div that will hold the individual movie elements.
        const movieInfo = document.createElement("div");

        // Create an image element that we will be able to add sources and attributes to.
        const image = document.createElement("img");

        movieInfo.classList.add("movie_title")
        movieInfo.appendChild(image);
        movieList.appendChild(movieInfo);
        image.setAttribute("src", jsObject.Poster);
        image.setAttribute("alt", `A movie poster for ${jsObject.Title}`)
        image.classList.add("poster");
    });