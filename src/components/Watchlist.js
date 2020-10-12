import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist, "WATCHLIST");

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My watch list:</h1>
          <span className="count-pill">
            {watchlist.lenght} {watchlist.lenght === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watch list</h2>
        )}
      </div>
    </div>
  );
};
