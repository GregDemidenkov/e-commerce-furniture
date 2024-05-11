import protectedAxios from "@/shared/api/config/axios";
import { User } from "../model/types";


class UserService {

    userUrl = '/user';

    updateUser(data: User) {
        return protectedAxios.patch(`${this.userUrl}/change`, data)
    }
};

export default new UserService();
