import React from 'react';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
 const Movie = ({ movie }) => {
  const BASE_LINK = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Link to={`/${movie.id}`}>
      <Overdrive id={`${movie.id}`}>
        <img className="shadowed-xl rounded" src={`${BASE_LINK}${movie.poster.path}`} alt="" />
      </Overdrive>
    </Link>
  );
};


export default Movie;
