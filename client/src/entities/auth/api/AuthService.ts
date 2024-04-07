import { axiosApi } from "@/shared/api/config/axios";
import { LoginData, RegistrationData } from "../model/types";


class AuthService {

    authUrl = '/auth';


    registration(data: RegistrationData) {
        return axiosApi.post(`${this.authUrl}/registration`, data);
    };

    login(data: LoginData) {
        return axiosApi.post(`${this.authUrl}/login`, data);
    };
};

export default new AuthService();
