import React from 'react';
import PropTypes from 'prop-types';

function Loading({ children }) {
    return (
        <p>
            <i className="fas fa-spinner fa-spin"></i> {children || 'Chargement ...'}
        </p>
    );
}

export default Loading;

Loading.propTypes = {
    children: PropTypes.string,
};
