import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import {  useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function Chart() {

  const dataOrder = useSelector(state => state.dropdown.selectedDate);
  return (
    
    <div className='App' style={{ padding: "5rem 0" }}>
      <Bar
        data={{
          labels: dataOrder?.data?.map(data => data.day),
          datasets: [
            {
              data: dataOrder?.data?.map(data => data.orderCount),
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

