import React from 'react';
import Chart from 'react-apexcharts';

const TimeChart = ({ title, categories, series }) => {
  const options = {
    chart: {
      id: 'time-chart',
      toolbar: {
        show: false
      },
      background: '#2c2c2c' // Fondo del gráfico en gris oscuro
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
          colors: '#ffffff' // Color de las etiquetas en blanco para contraste
        },
        offsetX: 0 // Ajusta la posición horizontal de las etiquetas
      },
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Tiempo (ns)',
        style: {
          color: '#ffffff' // Color del título en blanco
        }
      },
      labels: {
        formatter: (value) => `${value.toFixed(0)}ns`,
        style: {
          colors: '#ffffff' // Color de las etiquetas en blanco
        }
      }
    },
    title: {
      text: title,
      align: 'center',
      style: {
        color: '#ffffff' // Color del título en blanco
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        distributed: true,
        endingShape: 'flat',
        dataLabels: {
          position: 'top',
          style: {
            colors: ['#ffffff'] // Color de las etiquetas de datos en blanco
          }
        }
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -10,
      style: {
        colors: ['#ffffff'] // Color de las etiquetas de datos en blanco
      }
    },
    grid: {
      show: true,
      borderColor: '#444', // Color de la cuadrícula en gris oscuro
      strokeDashArray: 4,
      row: {
        colors: ['#2c2c2c', 'transparent'], // Alternar colores de las filas
        opacity: 0.5
      },
      column: {
        colors: ['#2c2c2c', 'transparent'], // Alternar colores de las columnas
        opacity: 0.5
      }
    },
    colors: ['#ff6347', '#4caf50', '#00bcd4', '#ff9800', '#9c27b0', '#3f51b5'] // Colores de las barras
  };

  const isValidSeries = (series) => {
    return series.every(s => s.data && s.data.every(d => d !== undefined));
  };

  console.log('Options:', options);
  console.log('Series:', series);

  return (
    <div className="chart">
      <div>
        {isValidSeries(series) ? (
          <Chart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        ) : (
          <div>Error: Datos inválidos</div>
        )}
      </div>
    </div>
  );
};

export default TimeChart;
