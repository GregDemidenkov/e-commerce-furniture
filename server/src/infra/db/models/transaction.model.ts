import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Document } from "mongoose"


export type TransactionDocument = Transaction & Document

@Schema({ collection: 'user_orders' })
export class Transaction {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: string

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserOrder' }] })
    user_order_id: string

    @Prop()
    amount: number

    @Prop()
    currency: 'RUB'
}

export const TransactionrModel = SchemaFactory.createForClass(Transaction)