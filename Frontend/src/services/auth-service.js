import { API_URL } from '../utils/constants';
import { api } from '../utils/api-requests';

const register = async userData => {
  const response = await api.post(`${API_URL}/api/users/`, {
    email: userData.email,
    address: userData.address,
    name_surname: userData.name,
    id_number: userData.idNumber,
    payment_info: 'credit',
    password: userData.password,
  });

  // return response.data;

  return response;
};

const login = async userData => {
  const response = await api.post(`${API_URL}/api/auth/token/login/`, {
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
    const response = await api.get(`${API_URL}/api/users/me/`);
    return response.data;
  } catch (error) {
    localStorage.removeItem('userToken');
    console.log(error.message);
  }
};

const logout = async () => {
  const response = await api.post(`${API_URL}/api/auth/token/logout/`);
  localStorage.removeItem('userToken');

  return response;
};

const authService = {
  register,
  login,
  logout,
  getAuth,
};

export default authService;
