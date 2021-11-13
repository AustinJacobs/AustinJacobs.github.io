const url = 'http://www.omdbapi.com/?t=Finch&y=2021&apikey=#####';

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

        const movieList = document.getElementById("list");
        const image = document.getElementById("poster");

        const movie = document.createElement("li");
        movie.innerHTML = `<h2>${jsObject.Title}</h2>`
        movieList.appendChild(movie);

        image.setAttribute("src", jsObject.Poster);

    });

    116296b7