import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function useFetch(url, isExecuteRequest) {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isExecuteRequest) {
            fetch(url)
                .then((response) => response.json())
                .then(setData)
                .catch(() => setIsError(true));
        }
    }, []);

    return { data, isError };
}

export default useFetch;

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
    isExecuteRequest: PropTypes.bool.isRequired,
};
