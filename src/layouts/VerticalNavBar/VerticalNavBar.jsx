import React from 'react';
import './verticalNavBar.scss';
import VerticalNavBarIcon from '../../components/VerticalNavBarIcon/VerticalNavBarIcon';
import dumbbell from './images/dumbbell.png';
import swim from './images/swim.png';
import yoga from './images/yoga.png';
import bike from './images/bike.png';

function VerticalNavBar() {
    return (
        <nav id="verticalNavBar">
            <ul>
                <VerticalNavBarIcon>
                    <img src={yoga} alt="person in yoga position" />
                </VerticalNavBarIcon>
                <VerticalNavBarIcon>
                    <img src={swim} alt="person is swimming" />
                </VerticalNavBarIcon>
                <VerticalNavBarIcon>
                    <img src={bike} alt="person is biking" />
                </VerticalNavBarIcon>
                <VerticalNavBarIcon>
                    <img src={dumbbell} alt="dumbbell" />
                </VerticalNavBarIcon>
            </ul>
            <p id="copyrightText">Copyright, SportSee 2020</p>
        </nav>
    );
}

export default VerticalNavBar;
