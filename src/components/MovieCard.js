import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({movie, type}) => {
    console.log("ALOOO");
  return (
    <div className="movie-card">
      <div className="overlay">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls movie={movie} type={type} />
      
      </div>
    </div>
  );
};
