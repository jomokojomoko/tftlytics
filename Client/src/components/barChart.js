import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const BarChart = ({ data, xAxis, yAxis, styleBar, title }) => {
  return (
    <div className="chart-container" style={styleBar}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Bar
        data={data}
        options={{
          indexAxis: 'x',
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display:false,
            },

          },
          scales:{
            x:{
              title: {
                display:true,
                text: xAxis,
              },
            },
            y:{
              title:{
                display:true,
                text: yAxis,
              },
            },
          },
        }}
      />
    </div>
  );
};