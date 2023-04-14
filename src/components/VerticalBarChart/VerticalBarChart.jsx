import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function VerticalBarChart ({ data, options }) {
    return <Bar data={data} options={options} />
}

export default VerticalBarChart;