import React from 'react';
import './VerticalNavBarIcon.scss';

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
