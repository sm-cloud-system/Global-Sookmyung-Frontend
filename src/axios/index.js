import axios from 'axios';

const baseURL = 'http://192.168.56.101:30001/api';

const defaultAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      alert('타임아웃');
      return;
    }

    return Promise.reject(error);
  }
);

authAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('access') ?? '';
    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { defaultAxios, authAxios };
