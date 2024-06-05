import { IInputProps } from '../../shared/Filter/Filter';

export const filterInputs = [
  {
    label: 'Product Type',
    type: 'select',
    value: ['Electronics', 'Books', 'Clothing'],
  },
  { label: 'Result Type', type: 'select', value: ['Apple', 'Samsung', 'Sony'] },
  {
    label: 'Period',
    type: 'select',
    value: ['Under $50', '$50 to $100', 'Above $100'],
  },
];
export const analysisformInputs: IInputProps[] = [
  {
    label: 'File Type',
    placeholder: 'Select File Type',
    type: 'select',
    value: ['Electronics', 'Books', 'Clothing'],
    isRequired: true,
  },
  {
    label: 'Statement Type',
    placeholder: 'Select Statement Type',
    type: 'select',
    value: ['Apple', 'Samsung', 'Sony'],
    isRequired: true,
  },
  {
    label: 'Bank Name',
    placeholder: 'Select Bank',
    type: 'select',
    value: ['Under $50', '$50 to $100', 'Above $100'],
    isRequired: true,
  },
  {
    label: 'File Password (optional)',
    placeholder: 'Enter File Password',
    type: 'input',
    value: [],
  },
];
export const creditReportformInputs: IInputProps[] = [
  {
    label: 'Bank Verification Number',
    placeholder: 'Enter BVN',
    type: 'input',
    value: [],
    isRequired: true,
  },
  {
    label: 'Report Period (optional)',
    placeholder: 'Enter File Password',
    type: 'input',
    value: [],
  },
];
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
      text: 'Chart.js Horizontal Bar Chart',
    },
    label: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
    legend: {
      display: false,
      position: 'right' as const,
    },
  },
};
export const barChartData = {
  labels: [],
  datasets: [
    {
      label: 'dataset 1',
      data: [],
      borderColor: '#207edf',
      backgroundColor: '#207edf',
    },
  ],
  scales: {
    ticks: {
      min: 0,
      max: 1200,
      stepSize: 200,
    },
  },
};

export const doughChartoptions = {
  cutout: '85%',
  rotation: -25,
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: true,
      position: 'right' as const,
    },
  },
};

export const doughChartData = {
  labels: ['Successful:510', 'Processing Error:510'],
  datasets: [
    {
      label: 'dataset 1',
      data: [510, 510],
      backgroundColor: ['#3EA986', '#C4C4C4'],
      borderWidth: 2,
      weight: 2,
    },
  ],
};

export const pendingDoughChartoptions = {
  cutout: '85%',
  rotation: 160,
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: true,
      position: 'right' as const,
    },
  },
};

export const pendingDoughChartData = {
  labels: ['Altered: 250', 'Failed: 250', 'Timeout: 0'],
  datasets: [
    {
      label: 'dataset 1',
      data: [250, 250, 0],
      backgroundColor: ['#F577DA', '#B60A0A', '#0A5F8E'],
      borderWidth: 2,
      weight: 2,
    },
  ],
};
export const drawPercentagePlugin = {
  id: 'drawPercentage',
  beforeDraw: (chart: any) => {
    const { ctx, data } = chart;
    const total = data.datasets[0].data.reduce(
      (acc: any, value: any) => acc + value,
      0,
    );
    const percentage = Math.round((data.datasets[0].data[0] / total) * 100);

    ctx.save();
    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '24px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(`${percentage}%`, xCenter, yCenter);
    ctx.restore();
  },
};
