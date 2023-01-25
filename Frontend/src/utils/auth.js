import {API_URL} from "./constants";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ( {
                           username,
                           email,
                           address,
                           id_number,
                           payment_info,
                           name_surname,
                           password } ) => {
    return fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            address: address,
            id_number: id_number,
            payment_info: payment_info,
            name_surname: name_surname,
            password: password,
        }
        )
    })
        .then((res) => {
            console.log(res);
            return checkResponse(res);
    });
};

export const authorize = (email, password) => {
    return fetch(`${API_URL}/auth/token/login/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "email": email,
                "name_surname": password
            }
        )
    })
        .then((response => response.json()))
        .then((data) => {
            if (data.token){
                localStorage.setItem('jwt', data.token);
                return data.token;
            }
            return data;
        })
};

