import { FullUserOrder, ProductOrder, UserOrders } from "@/entities/order"
import { productSerialize } from "@/entities/product"

export const productOrderSerialize = (data: any): ProductOrder => {
  return {
    id: data._id,
    count: data.count,
    fullPrice: data.full_price,
    userOrderId: data.user_order_id,
    product: productSerialize(data.product_id)
  } as ProductOrder;
}

export const userOrderSerialize = (data: any): FullUserOrder => {
  return {
    id: data._id,
    check: data.check,
    products: data.products.map((pr: any) => productOrderSerialize(pr)),
    status: data.status,
    userId: data.user_id,
    transactionId: data.transaction_id
  } as FullUserOrder;
}

export const userOrdersSerializer = (data: any) => {
  return {
    active: data.active.map((uO: any) => userOrderSerialize(uO)),
    closed: data.closed.map((uO: any) => userOrderSerialize(uO))
  } as UserOrders;
}