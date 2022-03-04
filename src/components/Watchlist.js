import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { MovieCard } from './MovieCard';

const Watchlist = () => {
  const {watchList} = useContext(GlobalContext);
  return (
    <div className="movie-page">
    <div className="container">
      <div className="header">
      <h1 className="heading">My Watchlist</h1>
      <span className="count-pill">
            {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
          </span>
      </div>
      {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchList" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
     
        </div>
      </div>
      
  )
}

export default Watchlist