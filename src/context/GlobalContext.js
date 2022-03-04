import React,{createContext,useReducer,useEffect} from 'react'
import AppReducer from './AppReducer';


const initialState={
    watchList:localStorage.getItem("watchList")?
      JSON.parse(localStorage.getItem("watchList")) :[],
    watched:localStorage.getItem("watched")?
    JSON.parse(localStorage.getItem("watched")) :[],
    
}

//global context creator
export const GlobalContext=createContext(initialState);

//global provider creator
export const GlobalProvider=(props)=>{ 

    const [state, dispatch] = useReducer(AppReducer,initialState)
    
    useEffect(() => {
        localStorage.setItem('watchList',JSON.stringify(state.watchList))
        localStorage.setItem('watched',JSON.stringify(state.watched))
      }, [state])
    const addMovieToWatchlist=(movie)=>{
       dispatch({type:"ADD_MOVIE_TO_WATCHLIST",payload:movie});

    };
    const removeMovieFromWatchList=(id)=>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:id})
    }

    const addMovieToWatched=(movie)=>{
        dispatch({
            type:"ADD_MOVIE_TO_WATCHED",payload:movie
        })
    }
    const moveToWatchlist=(movie)=>{
        dispatch({type:"MOVE_TO_WATCHLIST",payload:movie})
    }
    const removeToWatched=(id)=>{
        dispatch({type:"REMOVE_TO_WATCHED",payload:id})
    }


  return (
        <GlobalContext.Provider 
        value={{
            watchList:state.watchList,
            watched:state.watched,
            addMovieToWatchlist,
            removeMovieFromWatchList,
            addMovieToWatched,
            moveToWatchlist,
            removeToWatched

            }}>
            {props.children}
            
        </GlobalContext.Provider>
    )

}