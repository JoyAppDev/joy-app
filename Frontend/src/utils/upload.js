import {API_URL} from "./constants";

function checkResponse(res) {
    if (res.ok) {
        return res;
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const upload = (token, formData) => {
    return fetch(`${API_URL}/api/api/licenses2/`, {
        method: 'POST',
        headers: {
            "Authorization": `Token ${token}`
        },
        body: formData,
    })
        .then((res) => {
            console.log(res);
            return checkResponse(res);
        });
};
