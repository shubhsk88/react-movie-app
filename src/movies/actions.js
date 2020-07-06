export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

const key = process.env.APP_KEY;
console.log(key);

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const movies = await res.json();
    return dispatch({ type: GET_MOVIES, data: movies.results });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    );
    const movie = await res.json();
    return dispatch({ type: GET_MOVIE, data: movie });
  };
}
