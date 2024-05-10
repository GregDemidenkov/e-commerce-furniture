import { createAsyncThunk } from "@reduxjs/toolkit";

import UserOrderService from "@/entities/order/api/UserOrderService";
import { userOrderSerialize } from "./serializer";
import { FullUserOrder } from "@/entities/order";

export const getUserOrder = createAsyncThunk<FullUserOrder | null, string>(
  "order/getUserOrder", 
  async (userId, thunkAPI) => {
      try {
          const response: any = await UserOrderService.getUserOrder(userId);
          if (!!response.data) {
            return userOrderSerialize(response.data);
          } else {
            return null
          }
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)