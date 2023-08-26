import React from "react";
import {Bar} from "react-chartjs-2";
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
export const BarChart =({data,options,styleBar}) => {
    return (
      <div className="chart-container" style={styleBar}>
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
          data={data}
          options={options}
        />
      </div>
    );
  };