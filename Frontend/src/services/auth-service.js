import axios from 'axios';

import { API_URL } from '../utils/constants';

const register = async userData => {
  const response = await axios.post(`${API_URL}/users/`, {
    email: userData.email,
    address: userData.address,
    name_surname: userData.name,
    id_number: userData.idNumber,
    payment_info: 'credit',
    password: userData.password,
  });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const login = async userData => {
  const response = await axios.post(`${API_URL}/auth/token/login/`, {
    email: userData.email,
    password: userData.password,
  });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
