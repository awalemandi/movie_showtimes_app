import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData ( url ) {
    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState( '' );
    const [ response, setResponse ] = useState( [] );

    useEffect( () => {
        const fetchData = async () => {
            try {
                setLoading( true );
                const res = await axios.get( url );
                setResponse( res.data );
            } catch ( e ) {
                setError( e );
            } finally {
                setLoading( false );
            }
        };

        fetchData();
    }, [ url ] );

    return { loading, response, error };
};

export default useFetchData;
