import {
    config
} from "./config.js";

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const searchedMoviesDiv = document.getElementById("searched-movies");
const moviesDiv = document.getElementById("all-movies");
let searchButton = document.getElementById("search-button-movies");
const searchedTitles = document.getElementById("searched-titles");

searchButton.addEventListener("click", function () {
    let userQuery = document.getElementById("title_input").value;

    let searchURL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${userQuery}&include_adult=false`

    async function fetchSearchedMovies() {
        let data = []
        try {
            const response = await fetch(searchURL)
            const responseData = await response.json()
            data = responseData?.results
            console.log(data);
        } catch (error) {

        }
        searchedTitles.style.display = "block";
        searchedMoviesDiv.innerHTML = data?.map(movie => renderSingleMovie(movie)).join("")
    }
    fetchSearchedMovies();
})

async function fetchMovies() {
    let page = 1;
    let allMoviesUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    let data = []
    try {
        const response = await fetch(allMoviesUrl)
        const responseData = await response.json()
        data = responseData
        console.log(data);
    } catch (error) {

    }
    moviesDiv.innerHTML = data?.results.map(movie => renderSingleMovie(movie)).join("")
}
fetchMovies();

function renderSingleMovie(movie) {
    if (movie.poster_path != null) {
        return (
            `
            <div>
                <img src="${config.image_base_url + movie?.poster_path}" class="featured" alt=${movie.title}>
                <p class="title-centered">${movie.title}</p>
            </div>
            `
        )
    }
}