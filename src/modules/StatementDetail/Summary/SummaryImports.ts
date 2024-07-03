const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};
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
    legend: {
      display: false,
      position: "right" as const,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback: function (value: number) {
          return formatNumber(value as number);
        },
        stepSize: 500000,
      },
    },
    x: {
      grid: {
        display: false,
      },
      //   reverse: true,
    },
  },
  datalabels: {
    display: true,
    align: "top",
    anchor: "top",
    formatter: (value: number) => formatNumber(value),
    font: {
      weight: "bold",
    },
  },
  // indexAxis:"y"
};
export const barChartData = {
  labels: ["Credit", "Debit"],
  datasets: [
    {
      label: "dataset 1",
      data: [4200000, 1200000],
      borderColor: "transparent",
      fill: true,
      backgroundColor: ["#207EDF", "#B60A0A"],
      // borderRadius:100,
    },
  ],
};

export const lineChartoptions = {
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
    legend: {
      display: false,
      position: "right" as const,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        min: 0,
        max: 4500,
        // stepSize: 500,
      },
      grid: {
        display: false,
      },
    },
  },
  datalabels: {
    display: false,
  },
};
export const lineChartData = {
  labels,
  datasets: [
    {
      label: "dataset 1",
      data: [4200, 450, 2450, 3650, 2450, 3650, 2400, 3350, 3050],
      borderColor: "#207edf",
      borderWidth: 5,
      fill: true,
      backgroundColor: (context: any) => {
        const bgColor = ["rgba(32, 126, 223, 0.5)", "rgba(217, 217, 217, 0)"];
        if (!context.chart.chartArea) {
          return;
        }
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(0.2, bgColor[0]);
        gradientBg.addColorStop(1, bgColor[1]);
        return gradientBg;
      },
      pointBackgroundColor: "transparent",
      // pointBorderColor: 'transparent',
      pointRadius: 0,
      tension: 0.4,
      showLine: false,
    },
  ],
};
