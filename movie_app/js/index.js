function resetTextField() {
    document.getElementById("title_input").value = "";
}

let search_button = document.getElementById("searched");

search_button.addEventListener("click", function () {
    let title = document.getElementById("title_input").value;

    const url = `https://www.omdbapi.com/?t=${title}&apikey=116296b7`;

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
    resetTextField();
})