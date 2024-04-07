import { getCookie } from "@/shared/utils/cookie";
import protectedAxios, { axiosApi } from "../config/axios";
import { AUTH_PATH } from "../constants";

class TokenService {

    authUrl = AUTH_PATH;

    auth() {
      return protectedAxios.get(`${this.authUrl}/check-auth`,
          {headers: {Authorization: `Bearer ${getCookie("accessToken")}`}}
      )
    };

    refreshToken() {
      return axiosApi.get(`${this.authUrl}/refresh-token/${getCookie('refreshToken')}`)
    };
}


export default new TokenService();
