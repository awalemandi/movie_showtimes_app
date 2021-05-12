import React, { useState, useContext, createContext } from 'react';


const CurrentMoviesContext = createContext();

export function useCurrentMovies () {
    return useContext( CurrentMoviesContext );
}

export function CurrentMoviesProvider ( { children } ) {
    const [ currentMovies, SetCurrentMovies ] = useState( [] );
    return (
        <CurrentMoviesContext.Provider value={ [ currentMovies, SetCurrentMovies ] }>
            { children }
        </CurrentMoviesContext.Provider>
    );
}
