import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Line, Doughnut, Scatter } from 'react-chartjs-2';

ChartJS.register(...registerables);

export enum ChartType {
  Bar = 'bar',
  Line = 'line',
  Pie = 'pie',
  Doughnut = 'doughnut',
  PolarArea = 'polarArea',
  Radar = 'radar',
  Bubble = 'bubble',
  Scatter = 'scatter',
}
interface IChartProps {
  type: ChartType;
  labels?: string[];
  data?: any;
  options: any;
  plugins?: any;
}

const Charts = ({ type, data, options, plugins }: IChartProps) => {
  if (type === ChartType.Bar) {
    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  } else if (type === ChartType.Line) {
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  } else if (type === ChartType.Doughnut) {
    return (
      <div>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
    );
  } else {
    return (
      <div>
        <Scatter data={data} />
      </div>
    );
  }
};

export default Charts;
