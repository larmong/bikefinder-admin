import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function UserChart() {
  const data = {
    labels: ["March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        data: [821, 2200, 4203, 4900, 7800, 9200],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "transparent",
        pointBorderColor: "transparent",
        borderWidth: 2.5,
        tension: 0.2,
      },
    ],
  };
  const options = {
    plugin: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10000,
        ticks: {
          stepSize: 2000,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
