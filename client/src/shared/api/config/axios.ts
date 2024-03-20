import axios from "axios";

import AuthService from "../services/authService";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";


export const axiosApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_PORT,
});

const protectedAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_PORT,
    headers: {
        Authorization : `Bearer ${getCookie('accessToken')}`
    }
});

protectedAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
    
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const result = await AuthService.refreshToken();
            const token = result.data.accessToken;
            setCookie('accessToken', token);
            
            originalRequest.headers.Authorization = `Bearer ${getCookie('accessToken')}`;
            return axios(originalRequest);
        }

        removeCookie('accessToken');

        return Promise.reject(error);
    }
)

export default protectedAxios;
