import { createAsyncThunk } from "@reduxjs/toolkit"

import { getUserOrder } from "@/pages/cartPage/model/actions"
import { ChangeCountProductOrderDto } from "@/entities/order"
import ProductOrderService from "@/entities/order/api/ProductOrderService"


export const changeCountProductOrder = createAsyncThunk(
    "order/ChangeCountProductOrder", 
    async (dto: ChangeCountProductOrderDto, thunkAPI) => {
        try {
            const response: any = await ProductOrderService.changeCountProductOrder(dto)

            thunkAPI.dispatch(getUserOrder(dto.userId))

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)