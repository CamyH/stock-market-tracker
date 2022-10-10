import React from "react";
import { Line } from "react-chartjs-2";
// Without this import statement chart will not work
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
	return <Line data={chartData} />;
}

export default LineChart;
