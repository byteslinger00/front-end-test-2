import Card from "../Layouts/Card/Card";
import CardHeader from "../Layouts/Card/CardHeader";

import styles from "@/styles/Dashboard/Dashboard.module.css";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 20,
      },
    },
  },
};

const labels = ["Oct", "Nov", "Dec", "Jan", "Feb"];

export const data = {
  labels,
  datasets: [
    {
      label: "Expense",
      data: [60, 30, 30, 25, 20],
      backgroundColor: "#7479ff",
    },
    {
      label: "Income",
      data: [50, 15, 13, 12, 10],
      backgroundColor: "#7479ffaa",
    },
  ],
};

const LineChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      tension: 0.4, // Set the tension for Bezier curve
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const LineChartOption = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 1,
    },
  },
};

export default function BalanceStatistics() {
  return (
    <Card option="bg-white grow flex-col gap">
      <CardHeader>
        <h3 className="font-medium">Balance statistics</h3>
      </CardHeader>
      <div className="flex-row gap-xs grow">
        <div className="flex-col gap grow">
          <p className="text-lg">
            <strong>$564</strong>
          </p>
          <div className="flex-row gap-xs">
            <img
              src="https://i.postimg.cc/6pkcPK9D/coins.png"
              alt="coin"
              className={`${styles.coins}`}
            />
            <p className="my-auto text-md">Your total balance</p>
          </div>
          <div className={`${styles.bezierchart} flex-row gap-sm`}>
            <Line data={LineChartData} options={LineChartOption} />
            <FontAwesomeIcon icon={faCircleUp} className={`${styles.icon}`} />
            <p className="my-auto">6%</p>
          </div>
          <p className="text-gray text-md">Always see your earnings updates</p>
        </div>
        <div>
          <Bar options={options} data={data} />
        </div>
      </div>
    </Card>
  );
}
