import axios from 'axios';
import { API_URL } from '../utils/constants';

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

const register = async userData => {
  const response = await api.post(`${API_URL}/users/`, {
    email: userData.email,
    address: userData.address,
    name_surname: userData.name,
    id_number: userData.idNumber,
    payment_info: 'credit',
    password: userData.password,
  });

  return response.data;
};

const login = async userData => {
  const response = await api.post(`${API_URL}/auth/token/login/`, {
    email: userData.email,
    password: userData.password,
  });

  if (response.data.auth_token) {
    localStorage.setItem('userToken', response.data.auth_token);
  }

  return response.data;
};

const getAuth = async () => {
  try {
    const response = await api.get(`${API_URL}/users/me/`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const logout = () => {
  localStorage.removeItem('userToken');
};

const authService = {
  register,
  login,
  logout,
  getAuth,
};

export default authService;
