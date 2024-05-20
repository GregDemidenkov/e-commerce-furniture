import { createAsyncThunk } from "@reduxjs/toolkit";

import UserOrderService from "@/entities/order/api/UserOrderService";
import { userOrdersSerializer } from "@/pages/cartPage/model/serializer";
import { UserOrders } from "@/entities/order";

export const getUserOrders = createAsyncThunk<UserOrders, string>(
  "order/getUserOrders", 
  async (userId, thunkAPI) => {
      try {
          const response: any = await UserOrderService.getUserOrders(userId);
          
          return userOrdersSerializer(response.data);
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)