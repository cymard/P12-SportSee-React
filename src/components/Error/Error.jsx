import React from 'react';
import './error.scss';

function Error({ children }) {
    return <p className="errorMessage">{children || 'Une erreur est survenue.'}</p>;
}

export default Error;
