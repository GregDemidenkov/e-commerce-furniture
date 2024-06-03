import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUserOrder } from "@/views/cartPage/model/actions";
import ProductOrderService from "@/entities/order/api/ProductOrderService";
import { RemoveFromCartDto } from "./types";

export const removeFromCart = createAsyncThunk<any, RemoveFromCartDto>(
  "order/removeFromCart", 
  async (dto, thunkAPI) => {
      try {
          const response: any = await ProductOrderService.deleteFromCart(dto.productId)

          thunkAPI.dispatch(getUserOrder(dto.userId))
          
          return response.data
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)