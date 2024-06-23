import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line, Doughnut, PolarArea } from "react-chartjs-2";

ChartJS.register(...registerables);

export enum ChartType {
  Bar = "bar",
  Line = "line",
  Pie = "pie",
  Doughnut = "doughnut",
  PolarArea = "polarArea",
  Radar = "radar",
  Bubble = "bubble",
  // Polar = "polarArea",
}
interface IChartProps {
  type: ChartType;
  [key: string]: any;
  data: any;
  options: any;
  plugins?: any;
}

const Charts = ({ type, data, options, plugins, ...rest }: IChartProps) => {
  if (type === ChartType.Bar) {
    return (
      <div>
        <Bar data={data} options={options} {...rest} />
      </div>
    );
  } else if (type === ChartType.Line) {
    return (
      <div>
        <Line data={data} options={options} {...rest} />
      </div>
    );
  } else if (type === ChartType.Doughnut) {
    return (
      <div>
        <Doughnut data={data} options={options} plugins={plugins} {...rest} />
      </div>
    );
  } else {
    return (
      <div>
        <PolarArea data={data} options={options} plugins={plugins} {...rest} />
      </div>
    );
  }
};

export default Charts;
