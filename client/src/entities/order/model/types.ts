import { Product } from "@/entities/product"

export type ProductOrder = {
    id: string,
    userOrderId: string,
    product: Product,
    count: number,
    fullPrice: number
}

export type FullUserOrder = {
    id: string,
    userId: string,
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