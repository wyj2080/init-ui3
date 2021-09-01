import axios from "axios";
import ENV from "./env.js";

const instance = axios.create({
    baseURL: ENV,
    timeout: 60000,
});
//get请求
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, {
                params: params,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
//post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}
