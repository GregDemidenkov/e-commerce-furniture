import protectedAxios from "@/shared/api/config/axios"
import { AddProductOrderDto } from "../model/types"


class ProductOrderService {

    productOrderUrl = '/product-order'


    addProductOrder(dto: AddProductOrderDto) {
        return protectedAxios.post(`${this.productOrderUrl}/create`, dto)
    }

    deleteFromCart(productId: string) {
        return protectedAxios.delete(`${this.productOrderUrl}/${productId}`)
    }
}


export default new ProductOrderService()