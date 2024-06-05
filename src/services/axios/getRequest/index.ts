import { axiosInstance } from '../axiosInstance';

export const getCharts = () => {
  return axiosInstance.get('/chart');
};

export const getTableData = () => {
  return axiosInstance.get('/monthmetrics');
};
