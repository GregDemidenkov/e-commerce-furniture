import { createAsyncThunk } from "@reduxjs/toolkit";

import UserOrderService from "@/entities/order/api/UserOrderService";
import { CheckoutDto } from "@/entities/order";

export const checkout = createAsyncThunk<any, CheckoutDto>(
  "order/checkout", 
  async (dto, thunkAPI) => {
      try {
          const response: any = await UserOrderService.checkout(dto)
          
          return response.data
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)