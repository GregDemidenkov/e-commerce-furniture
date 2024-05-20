import protectedAxios from "@/shared/api/config/axios"
import { CheckoutDto } from "../model/types"


class UserOrderService {

    userOrderUrl = '/user-order'


    getUserOrder(userId: string) {
        return protectedAxios.get(`${this.userOrderUrl}/${userId}/`)
    }

    clearCart(userOrderId: string) {
        return protectedAxios.delete(`${this.userOrderUrl}/${userOrderId}`)
    }

    checkout(dto: CheckoutDto) {
        return protectedAxios.patch(`${this.userOrderUrl}/checkout/create/`, dto)
    }
}


export default new UserOrderService()