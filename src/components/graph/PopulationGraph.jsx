import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        font: {
          size: 12,
        },
      },
      borderRadius: 10,
    },
    tooltip: {
      backgroundColor: "rgba(0,0,0,0.8)",
      borderColor: "#fff",
      borderWidth: 1,
      titleColor: "#fff",
      bodyColor: "#fff",
      bodySpacing: 10,
      displayColors: false,
      callbacks: {
        label: function (context) {
          return `Population ${context.parsed.y}`;
        },
      },
    },
    title: {
      display: true,
      text: "YEAR-WISE POPULATION",
      font: {
        size: 16,
        family: "sans-serif",
        letterSpacing: 10
      },
      padding: 20,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(54, 162, 235, 0.2)",
      },
      ticks: {
        font: {
          size: 14,
          family: "sans-serif",
        },
      },
      title: {
        display: true,
        text: "Year",
        color: "gray",
      },
    },
    y: {
      grid: {
        display: true,
        color: "rgba(54, 162, 235, 0.2)",
      },
      ticks: {
        font: {
          size: 14,
        },
      },
      title: {
        display: true,
        text: "Number",
        color: "gray",
      },
    },
  },
};

const PopulationGraph = ({ populationData }) => {
  const data = {
    labels: populationData.map((data) => data.Year),
    datasets: [
      {
        label: "USA Population",
        data: populationData.map((data) => data.Population),
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default PopulationGraph;
