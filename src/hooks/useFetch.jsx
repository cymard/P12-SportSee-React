import React, { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(setData)
            .catch(() => setIsError(true));
    }, []);

    return { data, isError };
}

export default useFetch;
