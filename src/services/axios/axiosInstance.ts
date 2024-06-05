import axios from 'axios';

const baseUrl =
  process.env.REACT_APP_BASE_URL ||
  'https://665f06581e9017dc16f27e33.mockapi.io';
export const axiosInstance = axios.create({ baseURL: baseUrl });
