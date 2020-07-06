import React, { useEffect } from 'react';

import Movie from './Movie';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies } from '../movies/actions';

const MovieList = () => {
  let isLoaded = useSelector((state) => state.movie.moviesLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch(getMovies());
    }
  }, [dispatch, isLoaded]);
  let movies = useSelector((state) => state.movie.movies);
  console.log(movies);
  return (
    <div className="grid-cols-5 gap-4 p-4">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
