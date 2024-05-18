import { Injectable } from "@nestjs/common"

import { UserOrderDao } from "src/infra/db/dao/userOrder.dao"
import { ProductOrderDao } from "src/infra/db/dao/productOrder.dao"
import { ProductDao } from "src/infra/db/dao/product.dao"

import { IdDto } from "src/core/common/dto/id.dto"
import { UpdateCountDto } from "src/core/product/dto/updateCount.dto"

import { ProductCountExcess } from "src/core/productOrder/exceptions/productCountExcess"

import { UserOrderDocument } from "src/infra/db/models/user-order.model"
import { CheckoutDto } from "../dto/checkout.dto"
import { TransactionDao } from "src/infra/db/dao/transaction.dao"
import { TransactionDocument } from "src/infra/db/models/transaction.model"


@Injectable()
export class UserOrderService {

    constructor(
        private readonly userOrderDao: UserOrderDao,
        private readonly productOrderDao: ProductOrderDao,
        private readonly productDao: ProductDao,
        private readonly transactionDao: TransactionDao
    ) {}


    async getOrder(dto: IdDto): Promise<UserOrderDocument> {
        return this.userOrderDao.getOrderByUserId(dto.id)
    }

    async updateOrderStatus(dto: IdDto): Promise<UserOrderDocument> {
        const userOrder = await this.userOrderDao.getOrderById(dto.id)

        for(let id of userOrder.products) {
            const productOrder = await this.productOrderDao.getFullById(id)
            const product_id = productOrder.product.id

            if(productOrder.count > productOrder.product.count) {
                throw new ProductCountExcess("Not enough product in stock")
            }

            const updateCountDto: UpdateCountDto = {
                id: product_id,
                count: productOrder.count
            }

            await this.productDao.updateCount(updateCountDto)
        }

        return this.userOrderDao.updateOrderStatus(dto.id)
    }

    async deleteOrder(dto: IdDto) {
        await this.userOrderDao.deleteById(dto.id)

        await this.productOrderDao.deleteManyByUserOrderId(dto.id)
    }

    async checkout(dto: CheckoutDto): Promise<UserOrderDocument> {
        const userOrder = await this.userOrderDao.getOrderById(dto.userOrderId);

        for(let id of userOrder.products) {
            const productOrder = await this.productOrderDao.getFullById(id)
            const product_id = productOrder.product.id

            if(productOrder.count > productOrder.product.count) {
                throw new ProductCountExcess("Not enough product in stock")
            }

            const updateCountDto: UpdateCountDto = {
                id: product_id,
                count: productOrder.count
            }

            await this.productDao.updateCount(updateCountDto)
        }

        const transaction = await this.transactionDao.create(dto, userOrder.user_id);

        return this.userOrderDao.updateUserOrder(userOrder._id, 'active', transaction._id);
    }

    async getUserOrders(dto: IdDto) {
        const userOrdersActive = await this.userOrderDao.getOrderByUserIdAndStatus(dto.id, 'active');
        const userOrdersClosed = await this.userOrderDao.getOrderByUserIdAndStatus(dto.id, 'closed');

        return {
            active: userOrdersActive,
            closed: userOrdersClosed
        }
    }
    
}