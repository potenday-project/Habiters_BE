import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["해!", 1],
  ["마?", 1],
];

export const MyChart = () => {
  return (
    <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
  );
};
