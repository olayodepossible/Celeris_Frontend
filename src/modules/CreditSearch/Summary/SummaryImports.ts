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
          data,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(0.2, bgColor[0]);
        gradientBg.addColorStop(1, bgColor[1]);
        console.log(data);
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
