import { Chart } from 'chart.js/auto';

const ctxLine = document.getElementById("chartLine");
const ctxDoughnut = document.getElementById("chartDoughnut");

new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'Jabon de Argan',
        data: [300, 320, 350, 400, 380, 420, 390, 410, 430, 450, 480, 500],
        borderColor: "rgba(255, 0, 0, 1)", 
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderWidth: 2, 
      },
      {
        label: 'Jabon de glicerina',
        data: [200, 250, 280, 300, 320, 340, 370, 400, 420, 450, 470, 590],
        borderColor: "rgba(0, 0, 255, 1)", 
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 2,
      },
      {
        label: 'Jabon de afeitar',
        data: [290, 250, 280, 300, 320, 350, 388, 430, 470, 450, 430, 410],
        borderColor: "rgba(50, 50, 50, 1)", 
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderWidth: 2,
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


new Chart(ctxDoughnut, {
  type: "doughnut",
  data: {
    labels: ['Jabon de argan', 'Jabon de glicerina', 'Jabon de afeitar'],
    datasets: [{
      label: 'Ventas en el mes',
      data: [500, 590, 410],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
});


