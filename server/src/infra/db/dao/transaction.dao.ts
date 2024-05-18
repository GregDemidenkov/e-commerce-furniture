import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

import { Transaction, TransactionDocument } from "../models/transaction.model"
import { CheckoutDto } from "src/core/userOrder/dto/checkout.dto"


export class TransactionDao {

  constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}


  async create(dto: CheckoutDto, userId: string): Promise<TransactionDocument> {
    const newTransaction = {
      user_id: userId,
      user_order_id: dto.userOrderId,
      amount: dto.amount,
      currency: 'RUB',
    };

    return this.transactionModel.create(newTransaction)
  }
}