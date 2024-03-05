import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
export const BarChart = () => {
  const sourceData = [
    {
      label: "Jan",
      value1: 52,
      value2: 32,
    },
    {
      label: "Feb",
      value1: 40,
      value2: 22,
    },
    {
      label: "Mar",
      value1: 62,
      value2: 32,
    },
    {
      label: "April",
      value1: 45,
      value2: 45,
    },
    {
      label: "May",
      value1: 20,
      value2: 10,
    },
    {
      label: "June",
      value1: 52,
      value2: 60,
    },
  ];
  return (
    <>
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "income",
              data: sourceData.map((data) => data.value1),
              backgroundColor: "rgb(132, 204, 22)",
              hoverOffset: 4,
              borderRadius: 20,
            },
            {
              label: "expense",
              data: sourceData.map((data) => data.value2),
              backgroundColor: "rgb(249, 115, 22)",
              hoverOffset: 4,
              borderRadius: 20,
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
export const DoughnutChart = () => {
  const data = {
    labels: "",
    datasets: [
      {
        label: "My First Dataset",
        data: [150, 70, 100, 90, 40],
        backgroundColor: [
          "rgb(28, 100, 242)",
          "rgb(242, 144, 28)",
          "rgb(22, 189, 202)",
          "rgb(253, 187, 140)",
          "rgb(231, 70, 148)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut data={data} />;
};
