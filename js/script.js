"use strict";

const numberOfFilms = prompt(`How many films did you've seen?`, ``);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestionFirstTime = prompt(`What is last movie that you've seen?`, ``),
      secondQuestionFirstTime = prompt(`How much did you enjoyed it?(from 1 to 10)`, ``),
      firstQuestionSecondTime = prompt(`What is last movie that you've seen?`, ``),
      secondQuestionSecondTime = prompt(`How much did you enjoyed it?(from 1 to 10)`, ``);

personalMovieDB.movies[firstQuestionFirstTime] = secondQuestionFirstTime;
personalMovieDB.movies[firstQuestionSecondTime] = secondQuestionSecondTime;

console.log(personalMovieDB);