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

const ChartModule = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Weekly Line Chart",
        data: [12, 19, 30, 50, 2, 100, 7], // این داده ها را بر اساس نیاز خود تغییر دهید
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(255, 105, 180, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-[95%] h-fit bg-gray-700 rounded-md ">
      <p className="w-full font-medium text-gray-400 text-center mt-1">
        Balance
      </p>
      <h1 className="w-full font-bold text-white text-center mt-2">
        $19,566,360,00
      </h1>
      <Line data={data} options={options} className="mt-7" />
    </div>
  );
};

export default ChartModule;
