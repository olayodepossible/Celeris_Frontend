import { useQuery } from 'react-query';
import { getCharts } from '../../services/axios/getRequest';

const useChartQuery = () => {
  const labels = [];
  const datas = [];
  const { isLoading, data, isError, error } = useQuery('linechart', getCharts);
  for (let i = 0; i < data?.data.length; i++) {
    const element = data?.data[i];
    labels.push((element.month as string).slice(0, 3));
    datas.push(element.price);
  }
  return { isLoading, labels, datas, isError, error };
};

export default useChartQuery;
