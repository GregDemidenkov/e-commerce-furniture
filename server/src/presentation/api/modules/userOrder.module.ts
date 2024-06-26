import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { UserOrderController } from "../controllers/userOrder.controller"
import { UserOrderService } from "src/core/userOrder/service/UserOrder.service"

import { UserOrderDao } from "src/infra/db/dao/userOrder.dao"
import { ProductOrderDao } from "src/infra/db/dao/productOrder.dao"
import { ProductDao } from "src/infra/db/dao/product.dao"

import { UserOrder, UserOrderModel } from "src/infra/db/models/user-order.model"
import { ProductOrder, ProductOrderModel } from "src/infra/db/models/product-order.model"
import { Product, ProductModel } from "src/infra/db/models/product.model"
import { TransactionModel } from "src/infra/db/models/transaction.model";

import { AuthMiddleware } from "../middleware/auth/auth.middleware"
import { Transaction } from "src/infra/db/models/transaction.model"
import { TransactionDao } from "src/infra/db/dao/transaction.dao"


@Module({
    imports: [
        MongooseModule.forFeature([
            {name: UserOrder.name, schema: UserOrderModel},
            {name: ProductOrder.name, schema: ProductOrderModel},
            {name: Product.name, schema: ProductModel},
            {name: Transaction.name, schema: TransactionModel},
        ])
    ],
    providers: [UserOrderService, UserOrderDao, ProductOrderDao, ProductDao, TransactionDao],
    controllers: [UserOrderController]
})


export class UserOrderModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(AuthMiddleware)
          .forRoutes(UserOrderController);
    }
}