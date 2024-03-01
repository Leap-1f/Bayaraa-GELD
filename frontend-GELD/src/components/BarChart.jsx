import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
export const BarChart = () => {
  const sourceData = [
    {
      label: "Ads",
      value: 32,
    },
    {
      label: "Subscriptions",
      value: 45,
    },
    {
      label: "Sponsorships",
      value: 23,
    },
  ];
  return (
    <>
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: sourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
              ],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Revenue Source",
            },
          },
        }}
      />
    </>
  );
};
