import axios from "axios";
import ENV from "./env.js";

const instance = axios.create({
    baseURL: ENV,
    timeout: 60000,
});
export function login(username, password) {
    let tenantId = '';
    let data = {
        username:username,
        password:password,
    }
    this.$http.get("/api/sa-token/login",{params:{...data}}).then((response) => {
        tenantId = response.data;
        if(tenantId){
            sessionStorage.setItem("tenantId", tenantId);
        }
        console.log(response)
    })
}
//get请求
export function get(url, config) {
    config.headers.tenantId = sessionStorage.getItem("tenantId");
    this.$http.get(url,config).then((response) => {
        console.log(response)
    })
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
