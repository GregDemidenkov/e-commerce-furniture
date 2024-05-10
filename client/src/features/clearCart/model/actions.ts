import UserOrderService from "@/entities/order/api/UserOrderService";
import { getUserOrder } from "@/pages/cartPage/model/actions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ClearCartDto } from "./types";

export const clearCart = createAsyncThunk<any, ClearCartDto>(
  "order/clearCart", 
  async (dto, thunkAPI) => {
      try {
          const response: any = await UserOrderService.clearCart(dto.userOrderId)

          thunkAPI.dispatch(getUserOrder(dto.userId))
          
          return response.data
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)