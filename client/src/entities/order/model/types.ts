import { Product } from "@/entities/product"

export type ProductOrder = {
    _id: string,
    user_order_id: string,
    product_id: Product,
    count: number,
    full_price: number
}

export type FullUserOrder = {
    _id: string,
    user_id: string,
    products: ProductOrder[],
    check: number,
    status: 'pending' | 'active' | 'closed'
}

export type UserOrder = {
    id: string,
    userId: string,
    products: string[],
    check: number,
    status: 'pending' | 'active' | 'closed'
}

export type AddProductOrderDto = {
    userId: string,
    productOrder: {
        id: string,
        count: number
    }
}

export type DeleteProductOrderDto = {
    userId: string,
    productId: string
}