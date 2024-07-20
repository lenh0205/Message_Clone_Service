import axios from "axios";

export const defaultAxiosInstance = axios.create({
    timeout: 10000,
    baseURL: 'https://api.example.com'
});

export const defaultRequestInterceptors = defaultAxiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const defaultResponseInterceptors = defaultAxiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

