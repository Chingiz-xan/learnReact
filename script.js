const numberOfFilms = +prompt("How much film?");

    const personalMovieDB = {
        count:numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    const a = prompt("Last your film",""),
          b = prompt("Rating",""),
          c = prompt("Last your film",""),
          d = prompt("Rating","");

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);