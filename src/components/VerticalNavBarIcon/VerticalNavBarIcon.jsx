import React from 'react';
import './VerticalNavBarIcon.scss';
import PropTypes from 'prop-types';

function VerticalNavBarIcon({ children }) {
    return (
        <li>
            <a className="verticalNavBarIcon" href="#">
                {children}
            </a>
        </li>
    );
}

export default VerticalNavBarIcon;

VerticalNavBarIcon.prototype = {
    children: PropTypes.string.isRequired,
};
