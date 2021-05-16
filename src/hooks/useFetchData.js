import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchData ( url ) {
    const [ loading, setLoading ] = useState( false );
    const [ response, setResponse ] = useState( [] );

    useEffect( () => {
        setLoading( true );
        const fetchData = async () => {
            try {
                const res = await axios.get( url );
                setResponse( res.data.data );
            } catch ( e ) {
                console.log( e );
            } finally {
                setLoading( false );
            }
        };

        fetchData();
    }, [ url ] );

    return [ response, loading ];
};

export default useFetchData;
