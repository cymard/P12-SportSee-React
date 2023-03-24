import React from 'react';
import './header.scss';
import logoSportSee from './images/logo-sportsee.png';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <img src={logoSportSee} alt="logo rouge sportsee"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">Profil</a>
                    </li>
                    <li>
                        <a href="#">Réglage</a>
                    </li>
                    <li>
                        <a href="#">Communauté</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
