import {
    config
} from "./config.js";

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const moviesDiv = document.getElementById("all-movies");
let searchButton = document.getElementById("search-button-movies");

searchButton.addEventListener("click", function () {
    let userQuery = document.getElementById("title_input").value;
    let page = 'page-1'

    let searchURL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${userQuery}&${page}&include_adult=false`

    async function fetchMovies() {
        let data = []
        try {
            const response = await fetch(searchURL)
            const responseData = await response.json()
            data = responseData?.results
            console.log(data);
        } catch (error) {

        }

        moviesDiv.innerHTML = data?.map(movie => renderSingleMovie(movie)).join("")
    }
    fetchMovies();
})

function renderSingleMovie(movie) {
    if (movie.poster_path != null) {
        return (
            `
            <div>
                <img src="${config.image_base_url + movie?.poster_path}" class="featured" alt=${movie.original_title}>
                <p class="title-centered">${movie.original_title}</p>
            </div>
            `
        )
    }
}