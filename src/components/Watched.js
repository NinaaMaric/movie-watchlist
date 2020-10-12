import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watched = () => {
    const {watched} = useContext(GlobalContext)
    console.log(watched, "WATCHED")
    return (
        <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched movies: </h1>
            <span className="count-pill">
            {watched.lenght} {watched.lenght === 1 ? "Movie" : "Movies"}
          </span>
          </div>
          {watched ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <MovieCard movie={movie} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your watched list</h2>
          )}
        </div>
      </div>
    )
}
