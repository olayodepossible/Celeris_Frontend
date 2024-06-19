export const doughChartoptions = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: true,
      position: "bottom" as const,
      align: "start",
    },
  },
};
export const doughChartData = {
  labels: [
    "Payments",
    "Entertainment",
    "Gambling",
    "Loans",
    "Crypto",
    "Others",
  ],
  datasets: [
    {
      label: "dataset 1",
      data: [4000, 1900, 3000, 4700],
      borderColor: "#fff",
      fill: true,
      backgroundColor: ["#207EDFCC", "#207EDF", "#207EDF80", "#207EDF"],
    },
  ],
};
