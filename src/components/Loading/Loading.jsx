import React from 'react';

function Loading({ children }) {
    return (
        <p>
            <i className="fas fa-spinner fa-spin"></i> {children || 'Chargement ...'}
        </p>
    );
}

export default Loading;
