import React, { useContext, createContext } from 'react';
import useFetchData from '../hooks/useFetchData';

const MovieContext = createContext();

export function useMovie () {
    return useContext( MovieContext );
}

export function MovieProvider ( { children } ) {
    const [ movies, SetMovies ] = useFetchData( '/api/movies' );
    return (
        <MovieContext.Provider value={ [ movies, SetMovies ] }>
            { children }
        </MovieContext.Provider>
    );
}
