import React, { useEffect, useState } from 'react';
import './home.scss';
import VerticalNavBar from '../../layouts/VerticalNavBar/VerticalNavBar';
import CalorieItem from '../../components/CalorieItem/CalorieItem';
import chickenIcon from '../../components/CalorieItem/images/chicken.png';
import fireIcon from '../../components/CalorieItem/images/fire.png';
import appleIcon from '../../components/CalorieItem/images/apple.png';
import cheeseBurgerIcon from '../../components/CalorieItem/images/cheeseburger.png';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Line, Radar, Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useUserFetch from '../../hooks/useUserFetch';

function Home() {
    const [userData, setUserData] = useState({ status: false, data: [] });
    const [isError, setIsError] = useState({ status: false, message: '' });
    const [isUserRequestExecuted, setIsUserRequestExecuted] = useState(false);
    let { id } = useParams();
    const { isRequestsExecuted, formattedUserData, error } = useUserFetch(id);

    useEffect(() => {
        // Permet de ne pas provoquer un nouveau render, si les requêtes ont déjà été éxécutées
        if (isUserRequestExecuted) {
            return;
        }

        if (isRequestsExecuted) {
            setIsUserRequestExecuted(true);
        }

        if (error.status) {
            setIsError({ status: true, message: error.message });
            return;
        }

        if (isError.status) {
            setIsError({ status: false, message: '' });
        }

        setUserData(formattedUserData);
    });

    const doughnutPluginsScoreCenter = {
        id: 'doughnut_plugins_score_center',
        beforeDatasetsDraw(chart) {
            const score = chart.data.datasets[0].data[1];
            const { ctx, width, height } = chart;

            const textFirstPart = score + '%';
            const textSecondPart = 'de votre';
            const textThirdPart = 'objectif';

            const centerX = width / 2;
            const centerY = height / 2;

            ctx.font = '24px Roboto';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black';
            ctx.fillText(textFirstPart, centerX - 20, centerY);

            ctx.fillStyle = 'gray';
            ctx.font = '15px Roboto';
            ctx.fillText(textSecondPart, centerX - 25, centerY + 30);
            ctx.fillText(textThirdPart, centerX - 25, centerY + 50);
        },
    };

    return (
        <div id="home">
            <VerticalNavBar />
            <main>
                {isError.status ? (
                    <Error>{isError.message}</Error>
                ) : userData.status ? (
                    <>
                        <h1>
                            Bonjour <span className="red-para">{userData.data.firstName}</span>
                        </h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        <section id="home-content">
                            <section id="statistics">
                                <div id="activities">
                                    <Bar
                                        data={{
                                            labels: Array.from(
                                                { length: userData.data.activitySessions.length },
                                                (_, index) => index + 1
                                            ),
                                            datasets: [
                                                {
                                                    label: 'Poids (kg)',
                                                    data: userData.data.activitySessions.map((data) => data.kilogram),
                                                    backgroundColor: 'black',
                                                    yAxisID: 'yPoids',
                                                },
                                                {
                                                    label: 'Calories brûlées (kCal)',
                                                    data: userData.data.activitySessions.map((data) => data.calories),
                                                    backgroundColor: 'red',
                                                    yAxisID: 'yCalories',
                                                },
                                            ],
                                        }}
                                        options={{
                                            animation: false,
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            datasets: {
                                                bar: {
                                                    borderRadius: 5,
                                                    barPercentage: 0.5,
                                                    categoryPercentage: 0.4,
                                                },
                                            },
                                            plugins: {
                                                tooltip: {
                                                    backgroundColor: 'red',
                                                    bodyColor: 'white',
                                                    mode: 'index',
                                                    usePointStyle: true,
                                                    displayColors: false,
                                                    bodySpacing: 25,
                                                    padding: {
                                                        y: 10,
                                                        x: 10,
                                                    },
                                                    bodyAlign: 'center',
                                                    bodyFont: {
                                                        size: 9,
                                                    },
                                                    caretSize: 0,
                                                    caretPadding: 30,
                                                    cornerRadius: 0,
                                                    callbacks: {
                                                        title: () => {
                                                            return '';
                                                        },
                                                        label: (context) => {
                                                            let label = '';

                                                            if (context.dataset.label === 'Poids (kg)') {
                                                                label = context.formattedValue + 'kg';
                                                            }

                                                            if (context.dataset.label === 'Calories brûlées (kCal)') {
                                                                label = context.formattedValue + 'Kcal';
                                                            }

                                                            return label;
                                                        },
                                                    },
                                                },
                                                title: {
                                                    display: true,
                                                    text: 'Activité quotidienne',
                                                    font: {
                                                        weight: '500',
                                                    },
                                                    color: 'black',
                                                    align: 'start',
                                                    fullSize: false,
                                                    lineHeight: 12,
                                                    padding: {
                                                        bottom: -30,
                                                    },
                                                },
                                                legend: {
                                                    position: 'top',
                                                    align: 'end',
                                                    labels: {
                                                        usePointStyle: true,
                                                        pointStyle: 'circle',
                                                        pointStyleWidth: 6,
                                                        boxHeight: 5,
                                                        padding: 20,
                                                    },
                                                },
                                                backgroundColor: 'red',
                                            },
                                            layout: {
                                                padding: {
                                                    left: 20,
                                                    top: 5,
                                                    right: 5,
                                                },
                                            },
                                            scales: {
                                                x: {
                                                    grid: {
                                                        display: false,
                                                    },
                                                    ticks: {
                                                        padding: 20,
                                                    },
                                                },
                                                yPoids: {
                                                    id: 'A',
                                                    position: 'right',
                                                    beginAtZero: false,
                                                    min:
                                                        Math.min(
                                                            ...userData.data.activitySessions.map(
                                                                (item) => item.kilogram
                                                            )
                                                        ) - 2,
                                                    max:
                                                        Math.max(
                                                            ...userData.data.activitySessions.map(
                                                                (item) => item.kilogram
                                                            )
                                                        ) + 2,
                                                    border: {
                                                        dash: [3, 2],
                                                    },
                                                    ticks: {
                                                        stepSize: 1,
                                                    },
                                                },
                                                yCalories: {
                                                    id: 'B',
                                                    position: 'left',
                                                    beginAtZero: false,
                                                    display: false,
                                                    max:
                                                        Math.max(
                                                            ...userData.data.activitySessions.map(
                                                                (item) => item.calories
                                                            )
                                                        ) + 20,
                                                },
                                            },
                                            onHover: (event, chartElement) => {
                                                if (chartElement.length > 0) {
                                                    const activePoint = chartElement[0];
                                                    const ctx = event.chart.ctx;
                                                    ctx.save();
                                                    ctx.globalCompositeOperation = 'destination-over';
                                                    ctx.fillStyle = 'lightgray';
                                                    const distanceFromGridToX =
                                                        activePoint.datasetIndex === 0 ? 43 : 65;
                                                    ctx.fillRect(
                                                        activePoint.element.x - distanceFromGridToX,
                                                        42,
                                                        93,
                                                        216
                                                    );
                                                    ctx.restore();
                                                }
                                            },
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
                                                        data: userData.data.averageSessions.map(
                                                            (data) => data.sessionLength
                                                        ),
                                                    },
                                                ],
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
                                                            size: 10,
                                                            family: 'Roboto',
                                                        },
                                                        padding: 15,
                                                        color: 'white',
                                                        align: 'start',
                                                        fullSize: false,
                                                    },
                                                    legend: {
                                                        display: false,
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
                                                                if (context.formattedValue) {
                                                                    return context.formattedValue + ' min';
                                                                }
                                                            },
                                                        },
                                                    },
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
                                                            display: false,
                                                        },
                                                        ticks: {
                                                            color: '#FFFFFF',
                                                            font: {
                                                                size: 8,
                                                            },
                                                        },
                                                        border: {
                                                            display: false,
                                                        },
                                                    },
                                                    y: {
                                                        grid: {
                                                            display: false,
                                                        },
                                                        min: -30,
                                                        max:
                                                            Math.max(
                                                                ...userData.data.averageSessions.map(
                                                                    (item) => item.sessionLength
                                                                )
                                                            ) + 10,
                                                        display: false,
                                                    },
                                                },
                                                borderWidth: 2,
                                                layout: {
                                                    padding: {
                                                        bottom: 10,
                                                        left: 15,
                                                        right: 15,
                                                    },
                                                },
                                                onHover: (event, chartElement) => {
                                                    if (chartElement.length > 0) {
                                                        const activePoint = chartElement[0];
                                                        const ctx = event.chart.ctx;
                                                        ctx.save();
                                                        ctx.globalCompositeOperation = 'destination-over';
                                                        ctx.fillStyle = 'rgba(170, 8, 8, 1)';
                                                        ctx.fillRect(
                                                            activePoint.element.x,
                                                            0,
                                                            event.chart.width - activePoint.element.x,
                                                            260
                                                        );
                                                        ctx.restore();
                                                    }
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="results">
                                        <Radar
                                            data={{
                                                // labels: ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio'],
                                                labels: Object.values(userData.data.performance.kind).map((item) =>
                                                    item.replace(/^\w/, (c) => c.toUpperCase())
                                                ),
                                                datasets: [
                                                    {
                                                        data: userData.data.performance.data.map((item) => item.value),
                                                        backgroundColor: 'rgba(255, 1, 1, 0.7)',
                                                    },
                                                ],
                                            }}
                                            options={{
                                                maintainAspectRatio: false,
                                                layout: {
                                                    padding: {
                                                        top: 20,
                                                        bottom: 20,
                                                    },
                                                },
                                                plugins: {
                                                    legend: {
                                                        display: false,
                                                    },
                                                },
                                                scales: {
                                                    r: {
                                                        grid: {
                                                            color: 'white',
                                                        },
                                                        pointLabels: {
                                                            color: 'white',
                                                            font: {
                                                                size: 8,
                                                            },
                                                        },
                                                        ticks: {
                                                            display: false,
                                                            stepSize: 40,
                                                        },
                                                        angleLines: {
                                                            display: false,
                                                        },
                                                    },
                                                },
                                                elements: {
                                                    point: {
                                                        radius: 0,
                                                    },
                                                    line: {
                                                        borderWidth: 0,
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="results">
                                        <Doughnut
                                            data={{
                                                datasets: [
                                                    {
                                                        data: [
                                                            100 - userData.data.todayScore * 100,
                                                            Math.floor(userData.data.todayScore * 100),
                                                        ],
                                                        backgroundColor: ['#FBFBFB', 'red'],
                                                    },
                                                ],
                                                labels: ['todayScore', ''],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                borderWidth: 0,
                                                borderDash: 10,
                                                cutout: 60,
                                                layout: {
                                                    padding: {
                                                        left: 10,
                                                        right: 10,
                                                        top: 5,
                                                        bottom: 5,
                                                    },
                                                },
                                                plugins: {
                                                    title: {
                                                        text: 'Score',
                                                        display: true,
                                                        align: 'start',
                                                        color: 'black',
                                                    },
                                                    legend: {
                                                        display: false,
                                                    },
                                                    tooltip: {
                                                        enabled: false,
                                                    },
                                                },
                                                elements: {
                                                    arc: {
                                                        borderRadius: 10,
                                                    },
                                                },
                                            }}
                                            plugins={[doughnutPluginsScoreCenter]}
                                        />
                                    </div>
                                </div>
                            </section>
                            <section id="calories">
                                <CalorieItem
                                    img={fireIcon}
                                    imgAlt="icon fire"
                                    unit="kcal"
                                    value={userData.data.keyData.calorieCount}
                                    color="red"
                                    name="Calories"
                                />
                                <CalorieItem
                                    img={chickenIcon}
                                    imgAlt="icon chicken"
                                    unit="g"
                                    value={userData.data.keyData.proteinCount}
                                    color="blue"
                                    name="Proteines"
                                />
                                <CalorieItem
                                    img={appleIcon}
                                    imgAlt="icon apple"
                                    unit="g"
                                    value={userData.data.keyData.carbohydrateCount}
                                    color="yellow"
                                    name="Glucides"
                                />
                                <CalorieItem
                                    img={cheeseBurgerIcon}
                                    imgAlt="icon cheeseburger"
                                    unit="g"
                                    value={userData.data.keyData.lipidCount}
                                    color="red"
                                    name="Lipides"
                                />
                            </section>
                        </section>
                    </>
                ) : (
                    <Loading></Loading>
                )}
            </main>
        </div>
    );
}

export default Home;
