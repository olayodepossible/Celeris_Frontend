export const labels = [];

export const barChartoptions = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    label: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};
export const barChartData = {
  labels: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "dataset 1",
      data: [650, 1250, 400, 900, 1700, 1250, 1700],
      borderColor: "transparent",
      fill: true,
      backgroundColor: "#1FCB4F",
    },
  ],
};

export const barChartData2 = {
  labels: ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "dataset 1",
      data: [650, 1250, 400, 900, 1700, 1250, 400],
      borderColor: "transparent",
      fill: true,
      backgroundColor: "#F46D22",
    },
  ],
};

export const radialChartData = {
  labels: ["Red", "Green"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
      borderColor: ["rgb(255, 99, 132)", "rgb(75, 192, 192)"],
      borderWidth: 1,
    },
  ],
};

export const radialChartoptions = {
  chart: {
    height: 280,
    type: "radialBar",
    width: "100%",
  },

  series: [67],
  colors: ["#87D4F9"],
  options: {
    plotOptions: {
      radialBar: {
        startAngle: -270,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: "75%",
          background: "#fff",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            show: false,
            offsetY: -10,
            color: "#000",
            fontSize: "13px",
          },
          value: {
            color: "#000",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#840909"],
        stops: [0, 50],
      },
    },
  },
  stroke: {
    lineCap: "round",
    dashArray: 30,
  },
};
