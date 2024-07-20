import React from 'react';
import Chart from 'react-apexcharts';

const IterationChart = ({ title, categories, series }) => {
  const options = {
    chart: {
      id: 'iteration-chart',
      type: 'bar',
      toolbar: {
        show: false
      },
      background: '#2c2c2c'
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: '#ffffff'
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true
      
    },
    title: {
      text: title,
      align: 'left',
      style: {
        color: '#ffffff'
      }
    },
    yaxis: {
      title: {
        text: 'Número de Iteraciones',
        style: {
          color: '#ffffff' 
        }
      },
      labels: {
        style: {
          colors: '#ffffff' 
        }
      }
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default IterationChart;
