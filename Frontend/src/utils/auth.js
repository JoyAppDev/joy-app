import { API_URL } from './constants';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ email, address, idNumber, name, password }) => {
  return fetch(`${API_URL}/users/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      address: address,
      name_surname: name,
      id_number: idNumber,
      payment_info: 'credit',
      password: password,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const authorize = (email, password) => {
  return fetch(`${API_URL}/auth/token/login/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    console.log(res);
    return checkResponse(res);
  });
};

export const checkToken = (token) => {
  return fetch(`${API_URL}/users/me`, {
    //credentials: 'include',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Ошибка: ${res.status}`);
      }
    })
    .then((data) => data);
};
