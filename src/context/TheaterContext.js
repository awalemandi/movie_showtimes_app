import React, { useContext, createContext } from 'react';
import useFetchData from '../hooks/useFetchData';

const TheaterContext = createContext();

export function useTheater () {
    return useContext( TheaterContext );
}

export function TheaterProvider ( { children } ) {
    const [ theatersList, setTheatersList ] = useFetchData( '/api/theaters' );
    return (
        <TheaterContext.Provider value={ [ theatersList, setTheatersList ] }>
            { children }
        </TheaterContext.Provider>
    );
}