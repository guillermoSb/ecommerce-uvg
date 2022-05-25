//import 'dotenv/config';
import axios from 'axios';

function get(path, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000" + path, params).then((response) => {
            if (response.body) {
                resolve(response.body);
            }
            resolve(response);
        }).catch((error) => {
            reject(error.response);
        });
    });
}

function post(path, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post("http://localhost:3000" + path, data).then((response) => {
            if (response.body) {
                resolve(response.body);
            }
            resolve(response);
        }).catch((error) => {
            reject(error.response);
        });
    });
}

function remove(path) {
    return new Promise((resolve, reject) => {
        axios.delete("http://localhost:3000" + path).then((response) => {
            if (response.body) {
                resolve(response.body);
            }
            resolve(response);
        }).catch((error) => {
            reject(error.response);
        });
    });
}

export const api = { get, post, remove };