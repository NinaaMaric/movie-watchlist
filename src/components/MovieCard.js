import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  console.log("ALOOO", type);
  return (
    <div className="movie-card">
     
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt="Poster"
      />
        {movie.title}
        <MovieControls movie={movie} type={type} />
      
    </div>
  );
};
