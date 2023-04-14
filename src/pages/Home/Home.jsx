import React from 'react';
import './home.scss';
import Menu from '../../layouts/Menu/Menu';
import CalorieItem from '../../components/CalorieItem/CalorieItem';
import chickenIcon from '../../components/CalorieItem/images/chicken.png';
import fireIcon from '../../components/CalorieItem/images/fire.png';
import appleIcon from '../../components/CalorieItem/images/apple.png';
import cheeseBurgerIcon from '../../components/CalorieItem/images/cheeseburger.png';
import { UserData, UserAverageSession, UserPerformance } from '../../Data';
// import { Bar } from "react-chartjs-2";
// import {Chart as Chartjs} from 'chart.js/auto'
import VerticalBarChart from "../../components/VerticalBarChart/VerticalBarChart";
import { Line, Radar } from 'react-chartjs-2';

function Home() {
    console.log(Object.values(UserPerformance[0].kind))
    console.log(UserPerformance.map(element => {
        // element.data.map(object => object.value)
        return {
            data: element.data.map(object => object.value)
        }
        // console.log(Object.values(element.data))
    }))

    // UserPerformance[0].kind.map(element => console.log(element))
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
                        <div id="activities">
                            <VerticalBarChart
                                data={{
                                    labels: UserData.map((data) => data.week),
                                    datasets: [
                                        {
                                            label: "Poids",
                                            data: UserData.map((data) => data.poids),
                                            backgroundColor: 'black',
                                            yAxisID: 'yPoids',
                                            // barThickness: 7,
                                            barPercentage: 1,

                                        },
                                        {
                                            label: "Calories",
                                            data: UserData.map((data) => data.cal),
                                            backgroundColor: 'red',
                                            yAxisID: 'yCalories',
                                            barPercentage: 1,
                                        }
                                    ]
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    datasets: {
                                        bar: {
                                            borderRadius: 5,
                                            maxBarThickness: 10
                                        }
                                    },
                                    // onHover: (e, bars, args) => {
                                    //     if(bars.length) {
                                    //         console.log(bars.shift().index)
                                    //         //     if (bars.shift().index) {
                                    //         //         chartElement[0]._model.backgroundColor = 'red';
                                    //         //     }
                                    //         // e.chart.resize(100, 100)
                                    //     }
                                    // },
                                    plugins: {
                                        tooltip: {
                                            backgroundColor: 'red',
                                            bodyColor: 'white',
                                            mode: 'index',
                                            usePointStyle: true,
                                            displayColors: false,
                                            callbacks: {
                                                title: () => {
                                                    return '';
                                                },
                                                label: (context) => {
                                                    let label = '';

                                                    if(context.dataset.label === 'Poids') {
                                                        label = context.formattedValue + 'kg';
                                                    }

                                                    if(context.dataset.label === 'Calories') {
                                                        label = context.formattedValue + 'Kcal';
                                                    }

                                                    return label;
                                                }
                                            },
                                            bodySpacing: 25,
                                            padding: {
                                                y: 20,
                                                x: 10,
                                            },
                                            caretSize: 0,
                                            caretPadding: 30,
                                            cornerRadius: 0
                                        },
                                        title: {
                                            display: true,
                                            text: "Activité quotidienne",
                                            font: {
                                                weight: '500'
                                            },
                                            color: 'black',
                                            align: 'start',
                                            fullSize: false,
                                            lineHeight: 12,
                                            padding: {
                                                bottom: -20
                                            }
                                        },
                                        legend: {
                                            position: 'top',
                                            align: 'end',
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: 'circle',
                                                pointStyleWidth: 6,
                                                boxHeight: 5,
                                                padding: 20
                                            },
                                        },
                                        backgroundColor: 'red',
                                    },
                                    scales: {
                                        x: {
                                            grid: {
                                                display: false,
                                            },
                                            ticks: {
                                                padding: 20
                                            }
                                        },
                                        yPoids: {
                                            id: 'A',
                                            position: 'right',
                                            beginAtZero: false,
                                            min: 69,
                                            max: 71,
                                            ticks : {
                                                stepSize: 1
                                            },
                                        },
                                        yCalories: {
                                            id: 'B',
                                            position: 'left',
                                            beginAtZero: false,
                                            display: false,
                                            max: 440
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div id="session-charts-container">
                            <div className="results">
                                <Line
                                    data={{
                                        labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((data) => data),
                                        datasets: [
                                            {
                                                data: UserAverageSession[0].sessions.map((data) => data.sessionLength),
                                            },
                                        ]
                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        responsive: true,
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: ['Durée moyenne des', 'sessions'],
                                                font: {
                                                    weight: '400',
                                                    size: 20,
                                                    family: 'Roboto'
                                                },
                                                padding: 30,
                                                color: 'white',
                                                align: 'start',
                                                fullSize: false,
                                            },
                                            legend: {
                                                display: false
                                            },
                                            tooltip: {
                                                mode: 'nearest',
                                                intersect: false,
                                                backgroundColor: 'white',
                                                bodyColor: 'black',
                                                cornerRadius: 0,
                                                displayColors: false,
                                                padding: 10,
                                                caretSize: 0,
                                                caretPadding: 15,
                                                callbacks: {
                                                    title: () => {
                                                        return '';
                                                    },
                                                    label: (context) => {
                                                        if(context.formattedValue) {
                                                            return context.formattedValue+' min';
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        pointStyle: true,
                                        pointRadius: 0,
                                        pointHoverRadius: 4,
                                        pointHoverBorderWith: 10,
                                        pointHitRadius: 20,
                                        pointHoverBackgroundColor: 'white',
                                        borderColor: 'rgba(255, 255, 255, 1)',
                                        tension: 0.4,
                                        scales: {
                                            x: {
                                                grid: {
                                                    display: false
                                                },
                                                ticks: {
                                                    color: '#FFFFFF',
                                                },
                                                border: {
                                                    display: false,
                                                },
                                            },
                                            y: {
                                                grid: {
                                                    display: false
                                                },
                                                min: -30,
                                                display: false
                                            }
                                        },
                                        borderWidth: 2,
                                        layout: {
                                            padding: {
                                                bottom: 20,
                                                left: 15,
                                                right: 15
                                            }
                                        },
                                        // onHover: (e) => {
                                        //     console.log(e)
                                        //     const dataX = e.chart.scales.x.getValueForPixel(e.x);
                                        //     console.log(dataX)
                                        //     // faire correspondre le nombre avec le dataset
                                        //     //
                                        // }
                                    }}
                                ></Line>
                            </div>
                            <div className="results">
                                <Radar
                                    data={{
                                        // labels: Object.values(UserPerformance[0].kind),
                                        labels: ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'],
                                        datasets: UserPerformance.map(element => {
                                            return {
                                                data: element.data.map(object => object.value)
                                            }
                                        })

                                    }}
                                    options={{
                                        maintainAspectRatio: false,
                                        layout: {
                                            padding: {
                                                top: 20,
                                                bottom: 20
                                            }
                                        },
                                        plugins: {
                                            legend: {
                                                display: false
                                            }
                                        },
                                        scales: {
                                            r: {
                                                grid: {
                                                    color: 'white'
                                                },
                                                pointLabels: {
                                                    color: 'white',
                                                    font: {
                                                        size: 12
                                                    }
                                                },
                                                ticks: {
                                                    display: false,
                                                    stepSize: 40
                                                },
                                                angleLines: {
                                                    display: false
                                                }
                                            }
                                        },
                                        elements: {
                                            point: {
                                                radius: 0
                                            },
                                            line: {
                                                borderWidth: 0
                                            }
                                        }
                                    }}
                                />
                            </div>
                            <div className="results"></div>
                        </div>
                    </section>
                    <section id="calories">
                        <CalorieItem img={fireIcon} imgAlt="icon fire" unit="kcal" value="1,930" color="red" name="Calories" />
                        <CalorieItem img={chickenIcon} imgAlt="icon chicken" unit="g" value="155" color="blue" name="Proteines" />
                        <CalorieItem img={appleIcon} imgAlt="icon apple" unit="g" value="290" color="yellow" name="Glucides" />
                        <CalorieItem img={cheeseBurgerIcon} imgAlt="icon cheeseburger" unit="g" value="50" color="red" name="Lipides" />
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Home;
