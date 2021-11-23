const popularDiv = document.getElementById("popular-movies");
const upcomingDiv = document.getElementById("upcoming-movies");
const allDiv = document.getElementById("all-movies");

import {
    getPopularMovies,
    getTopMovies,
    getAllMovies
} from "./api.js";
import {
    config
} from "./config.js";

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    popularDiv.innerHTML = movies?.slice(0, 4).map(movie => renderSingleMovie(movie)).join("")
}

export async function renderTopMovies() {
    const movies = await getTopMovies()
    console.log(movies)
    upcomingDiv.innerHTML = movies?.slice(0, 4).map(movie => renderSingleMovie(movie)).join("")
}

export async function renderAllMovies() {
    const movies = await getAllMovies()
    console.log(movies)
    allDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
        <div>
            <img src="${config.image_base_url + movie?.poster_path}" class="featured">
        </div>
        `
    )
}