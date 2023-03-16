import axios from 'axios';
import { API_URL } from './constants';

export const createAPI = () => {
  const api = axios.create({
    baseURL: API_URL,
  });

  api.interceptors.request.use(
    config => {
      const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null;

      if (userToken) {
        config.headers['Authorization'] = `Token ${userToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return api;
};

export const api = createAPI();
