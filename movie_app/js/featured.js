let url = "https://api.themoviedb.org/3/movie/popular?api_key=fd940caa3dfcfc92860ced4170dcd511&language=en&page=1";

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
        image.setAttribute("src", "https://image.tmdb.org/t/p/w500" + jsObject.results[0].poster_path);
        image.setAttribute("alt", `A movie poster for ${jsObject.results[0].original_title}`)
        image.classList.add("featured");
    });
