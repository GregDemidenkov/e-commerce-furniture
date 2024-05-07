import { createAsyncThunk } from "@reduxjs/toolkit"

import UserOrderService from "../api/UserOrderService";

export const getActiveProducts = createAsyncThunk<string[], string>(
  "order/getActiveProducts", 
  async (userId, thunkAPI) => {
      try {
          const response: any = await UserOrderService.getUserOrder(userId);

          let activeProducts: string[] = [];
          response.data.products.forEach((productOrder: any) => {
              activeProducts.push(productOrder.product_id._id);
          });
  
          return activeProducts;
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)