const trendingMovieDiv = document.getElementById("trending-movies");
const topMovieDiv = document.getElementById("top-movies");
const trendingTvDiv = document.getElementById("trending-tv");

import {
    getTopMovies,
    getTrendingTv,
    getTrendingMovies,
} from "./api.js";
import {
    config
} from "./config.js";

export async function renderTrendingMovies() {
    const movies = await getTrendingMovies()
    console.log(movies)
    trendingMovieDiv.innerHTML = movies?.slice(0, 10).map(movie => renderSingleMovie(movie)).join("")
}

export async function renderTopMovies() {
    const movies = await getTopMovies()
    console.log(movies)
    topMovieDiv.innerHTML = movies?.slice(0, 10).map(movie => renderSingleMovie(movie)).join("")
}

export async function renderTrendingTv() {
    const movies = await getTrendingTv()
    console.log(movies)
    trendingTvDiv.innerHTML = movies?.slice(0, 10).map(movie => renderSingleMovie(movie)).join("")
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