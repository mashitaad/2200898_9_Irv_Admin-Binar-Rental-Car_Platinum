import React from 'react';
import { LineChart, BarChart } from 'chart.js';

export default function Chart() {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => new Date(2023, 0, i + 1)),
    datasets: [
      {
        label: 'Amount of Car Rented',
        data: [0, 30, 60, 90, 120],
        backgroundColor: '#586B90',
        borderColor: '#586B90',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time', // Set the scale type to 'time'
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
          color: '#000000',
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount of Car Rented',
          color: '#000000',
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <h2>Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}
