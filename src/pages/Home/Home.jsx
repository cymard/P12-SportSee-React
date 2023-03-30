import React from 'react';
import './home.scss';
import Menu from '../../layouts/Menu/Menu';
import CalorieItem from '../../components/CalorieItem/CalorieItem';
import chickenIcon from '../../components/CalorieItem/images/chicken.png';
import fireIcon from '../../components/CalorieItem/images/fire.png';

function Home() {
    return (
        <div id="home">
            <Menu />
            <main>
                <h1>
                    Bonjour <span className="red-para">Thomas</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <section id="home-content">
                    <section id="statistics">
                        <div id="activities"></div>
                        <div id="session-charts-container">
                            <div className="results"></div>
                            <div className="results"></div>
                            <div className="results"></div>
                        </div>
                    </section>
                    <section id="calories">
                        <CalorieItem unit="kcal" value="1,930" color="red" name="Calories">
                            <img src={fireIcon} alt="" />
                        </CalorieItem>
                        <CalorieItem unit="g" value="155" color="blue" name="Proteines">
                            <img src={chickenIcon} alt="" />
                        </CalorieItem>
                        <CalorieItem unit="g" value="290" color="yellow" name="Glucides">
                            <i className="fa-solid fa-apple-whole apple-icon"></i>
                        </CalorieItem>
                        <CalorieItem unit="g" value="50" color="red" name="Lipides">
                            <i className="fa-solid fa-burger burger-icon"></i>
                        </CalorieItem>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Home;
