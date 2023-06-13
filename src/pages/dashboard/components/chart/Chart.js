import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const users = [
  { date: "1", amount_car_rented: 75 },
  { date: "2", amount_car_rented: 50 },
  { date: "3", amount_car_rented: 10 },
  { date: "4", amount_car_rented: 25 },
  { date: "5", amount_car_rented: 95 },
  { date: "6", amount_car_rented: 62 },
  { date: "7", amount_car_rented: 3 },
  { date: "8", amount_car_rented: 27 },
  { date: "9", amount_car_rented: 115 },
  { date: "10", amount_car_rented: 95 },
  { date: "11", amount_car_rented: 110 },
  { date: "12", amount_car_rented: 98 },
  { date: "13", amount_car_rented: 35 },
  { date: "14", amount_car_rented: 115 },
  { date: "10", amount_car_rented: 120 },
  { date: "11", amount_car_rented: 110 },
  { date: "12", amount_car_rented: 20 },
  { date: "13", amount_car_rented: 115 },
  { date: "14", amount_car_rented: 110 },
  { date: "15", amount_car_rented: 40 },
  { date: "16", amount_car_rented: 80 },
  { date: "17", amount_car_rented: 65 },
  { date: "18", amount_car_rented: 70 },
  { date: "19", amount_car_rented: 100 },
  { date: "20", amount_car_rented: 45 },
  { date: "21", amount_car_rented: 43 },
  { date: "22", amount_car_rented: 80 },
  { date: "23", amount_car_rented: 10 },
  { date: "24", amount_car_rented: 60 },
  { date: "25", amount_car_rented: 62 },
  { date: "26", amount_car_rented: 40 },
  { date: "27", amount_car_rented: 122 },
  { date: "28", amount_car_rented: 43 },
  { date: "29", amount_car_rented: 24 },
  { date: "30", amount_car_rented: 93 },
];

function Chart() {
  return (
    <div className='App' style={{ padding: "5rem 0" }}>
      <Bar
        data={{
          labels: users.map(user => user.date),
          datasets: [
            {
              data: users.map(user => user.amount_car_rented),
              backgroundColor: "rgba(88, 107, 144, 1)",
            },
          ]
        }}
        options={{
          indexAxis: 'x',
          responsive: true,
          aspectRatio: 3, // Atur aspectRatio sesuai kebutuhan Anda
          scales: {
            y: {
              title: {
                display: true,
                text: "Amount of Car Rented",
                font: {
                  family: 'Arial',
                  style: 'normal',
                  weight: 400,
                  size: 12,
                }
              },
            },
            x: {
              title: {
                display: true,
                text: "Date",
                font: {
                  family: 'Arial',
                  style: 'normal',
                  weight: 400,
                  size: 12,
                }
              },
              type: 'category',
              ticks: {
                stepSize: 1,
                callback: function (value, index, values) {
                  if (index <= 10 || index === values.length - 1 || index % 2 === 0) {
                    return value;
                  }
                  return '';
                }
              }
            },
          },
          plugins: {
            legend: {
              display: false, // Menyembunyikan legenda
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;
