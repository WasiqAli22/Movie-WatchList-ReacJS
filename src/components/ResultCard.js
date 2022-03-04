import React,{useContext} from 'react'
import Moment from "react-moment";
import { GlobalContext} from '../context/GlobalContext';


const ResultCard = ({movie}) => {
    const {addMovieToWatchlist,watchList,watched,addMovieToWatched} = useContext(GlobalContext);
    let storedWatchedList=watchList.find((o)=>o.id===movie.id);
    let storedWatched=watched.find((o)=>o.id===movie.id)
    const disableWatchedList=storedWatchedList? true:storedWatched?true:false
    const disableWatched=storedWatched?true:false
    return (
     <div className="result-card">
        <div className="poster-wrapper">
            {movie.poster_path?(
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`${movie.title} Poster`} 
                />
              
            ):(
           <div className="filler-poster" />
            )}
         </div>
      <div className="info">
         <div className="header">
          <h3 className="title">{movie.title}</h3>  
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>  
         </div>
         <div className="controls">
             <button className="btn"
             disabled={disableWatchedList}
           onClick={() => addMovieToWatchlist(movie)}
           >
                 Add to WatchList
             </button>
             <button
            className="btn"
            disabled={disableWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
         </div>     
       </div>
     </div>
  )
}

export default ResultCard