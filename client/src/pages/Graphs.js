import React, { useState } from 'react';

import BarChart from '../charts/bar-chart';
import {Chart as ChartJS } from 'chart.js/auto';

function Graph() {
    const dataMock = [
        {
            id: 1,
            year: 2000,
            gain: 10
        },
        {
            id: 2,
            year: 2001,
            gain: 3
        },
        {
            id: 3,
            year: 2002,
            gain: 8
        },
        {
            id: 4,
            year: 2003,
            gain: 13
        }
    ];

    const [dataOne, setDataOne] = useState({
        labels: dataMock.map((data) => data.year),
        datasets: [{
            label: "Users per year",
            data: dataMock.map((data) => data.gain),
            backgroundColor: ["green", "blue", "red", "yellow"],
            borderColor: "black",
            borderWidth: 3,
        }]
    });

    return(
        <div>
            <BarChart chartData={dataOne} />
        </div>
    )
};

export default Graph;