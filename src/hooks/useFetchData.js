import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData ( url ) {
    const [ loading, setLoading ] = useState( false );
    // const [ error, setError ] = useState( '' );
    const [ response, setResponse ] = useState( [] );

    useEffect( () => {
        setLoading(true);
        const fetchData = async () => {
            try {
                // setLoading( true );
                const res = await axios.get( url );
                setResponse( res.data.data );
            } catch ( e ) {
                console.log(e);
            } finally{
                setLoading(false);
            }
        };

        fetchData();
    }, [ url ] );

    return [ response, loading];
};

export default useFetchData;
