import React from 'react';

// react-chart-js2 has the premade type of charts from chartjs
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function BarChart({chartData}) {
    return(
        <div>
            <Bar data={chartData} />
        </div>
    )
};

export default BarChart;