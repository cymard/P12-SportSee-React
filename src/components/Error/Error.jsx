import React from 'react';
import './error.scss';
import PropTypes from 'prop-types';

function Error({ children }) {
    return <p className="errorMessage">{children || 'Une erreur est survenue.'}</p>;
}

export default Error;

Error.propTypes = {
    children: PropTypes.string,
};
