import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        baseURL: 'https://bwexpat-journal.herokuapp.com'
    });
}