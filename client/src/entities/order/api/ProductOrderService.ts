import protectedAxios from "@/shared/api/config/axios"
import { AddProductOrderDto, ChangeCountProductOrderDto } from "../model/types"


class ProductOrderService {

    productOrderUrl = '/product-order'


    addProductOrder(dto: AddProductOrderDto) {
        return protectedAxios.post(`${this.productOrderUrl}/create`, dto)
    }

    deleteFromCart(productId: string) {
        return protectedAxios.delete(`${this.productOrderUrl}/${productId}`)
    }

    changeCountProductOrder(dto: ChangeCountProductOrderDto) {
        return protectedAxios.patch(`${this.productOrderUrl}/update-count`, {
            userOrderId: dto.userOrderId,
            productOrderId: dto.productOrderId,
            count: dto.count,
            action: dto.action
        })
    }
}


export default new ProductOrderService()