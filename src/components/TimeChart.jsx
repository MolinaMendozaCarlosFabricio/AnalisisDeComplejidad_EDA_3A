import React from 'react';
import Chart from 'react-apexcharts';

const TimeChart = ({ title, categories, series }) => {
  const options = {
    chart: {
      id: 'time-chart',
      toolbar: {
        show: false
      },
      background: '#2c2c2c'
    },
    xaxis: {
      categories: categories, 
      title: {
        text: 'Método'
      },
      labels: {
        rotate: -45,
        style: {
          fontSize: '12px',
          colors: '#ffffff'
        },
        offsetX: 0
      },
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Tiempo (mls)',
        style: {
          color: '#ffffff'
        }
      },
      labels: {
        formatter: (value) => {
          // AQUI: Maneja valores null o undefined
          return value !== null && value !== undefined ? `${value.toFixed(2)}mls` : 'N/A';
        },
        style: {
          colors: '#ffffff'
        }
      }
    },
    title: {
      text: title,
      align: 'center',
      style: {
        color: '#ffffff'
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        endingShape: 'flat',
        dataLabels: {
          position: 'top',
          style: {
            colors: ['#ffffff']
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -10,
      style: {
        colors: ['#ffffff']
      }
    },
    grid: {
      show: true,
      borderColor: '#444',
      strokeDashArray: 4,
      row: {
        colors: ['#2c2c2c', 'transparent'],
        opacity: 0.5
      },
      column: {
        colors: ['#2c2c2c', 'transparent'],
        opacity: 0.5
      }
    },
    colors: ['#ff6347', '#4caf50', '#00bcd4', '#ff9800', '#9c27b0', '#3f51b5'],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      floating: true,
      offsetY: -25,
      labels: {
        colors: '#ffffff'
      }
    }
  };

  return (
    <div className="chart">
      <Chart
        options={options}
        series={series} // AQUI: Coloca las series de datos
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TimeChart;
