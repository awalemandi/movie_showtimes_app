import React, { useState, useEffect, useContext, createContext } from 'react';
import { useTheater } from './TheaterContext';
import { useMovie } from './MovieContext';


const CurrentMoviesContext = createContext();
const CurrentTheaterContext = createContext();

export function useCurrentMovies () {
    return useContext( CurrentMoviesContext );
}

export function useCurrentTheater () {
    return useContext( CurrentTheaterContext );
}

export function CurrentMoviesProvider ( { children } ) {
    const [ theatersList, setTheaterList ] = useTheater();
    const [ movies, setMovies ] = useMovie();
    const [ currentTheater, setCurrentTheater ] = useState( {} );
    const [ currentMovies, setCurrentMovies ] = useState( [] );

    return (
        <CurrentTheaterContext.Provider value={ [ currentTheater, setCurrentTheater ] }>
            <CurrentMoviesContext.Provider value={ [ currentMovies, setCurrentMovies ] }>
                { children }
            </CurrentMoviesContext.Provider>
        </CurrentTheaterContext.Provider>
    );
}
