import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common"

import { UserOrderService } from "src/core/userOrder/service/UserOrder.service"

import { IdDto } from "src/core/common/dto/id.dto"
import { CheckoutDto } from "src/core/userOrder/dto/checkout.dto"


@Controller('user-order')
export class UserOrderController {

    constructor(private readonly userOrderService: UserOrderService) {}


    @Get(':id')
    getOrder(@Param() dto: IdDto) {
        return this.userOrderService.getOrder(dto)
    }

    @Patch(':id')
    updateOrderStatus(@Param() dto: IdDto) {
        return this.userOrderService.updateOrderStatus(dto)
    }

    @Delete(':id')
    deleteOrder(@Param() dto: IdDto) {
        return this.userOrderService.deleteOrder(dto)
    }

    @Patch('/checkout/create')
    checkout(@Body() dto: CheckoutDto) {
        return this.userOrderService.checkout(dto)
    }

    @Get(':id/orders')
    getUserOrders(@Param() dto: IdDto) {
        return this.userOrderService.getUserOrders(dto)
    }
    
}