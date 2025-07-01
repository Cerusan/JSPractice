"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`How many films did you've seen?`, ``);

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`How many films did you've seen?`, ``);
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie,
    rateOfMovie;

let incr = 1;

function rememberMyFilms() {
    while (incr <= 2) {
        lastMovie = prompt(`What is last movie that you've seen?`, ``).trim();

        if (lastMovie === null || lastMovie.length == 0 || lastMovie.length > 50) {
            continue;
        }

        rateOfMovie = +prompt(`How much did you enjoyed it?(from 1 to 10)`, ``);

        if (rateOfMovie === null || rateOfMovie < 1 || rateOfMovie > 10 || isNaN(rateOfMovie) == true) {
            continue;
        }

        personalMovieDB.movies[lastMovie] = rateOfMovie;
        incr++
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        console.log(`You've seen a small amount of movies`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log(`You're a classic viewer`);
    } else if (personalMovieDB.count > 30) {
        console.log(`You're a cinephile`);
    } else {
        console.log(`Error 404`);
    }
}

detectPersonalLevel();

function showMyDB() {
    console.log(personalMovieDB);
}

if (personalMovieDB.privat === false) {
    showMyDB();
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);
    }
}

writeYourGenres();