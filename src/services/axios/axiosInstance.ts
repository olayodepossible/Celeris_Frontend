import axios from 'axios';

const baseUrl =
  process.env.REACT_APP_BASE_URL ||
  'https://665f06581e9017dc16f27e33.mockapi.io';

const axiosInstance = axios.create({ baseURL: baseUrl });

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await axios.post(`${baseUrl}/refresh-token`, {
          token: refreshToken,
        });
        const { accessToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common['Authorization'] =
          `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token expiration or other errors
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
