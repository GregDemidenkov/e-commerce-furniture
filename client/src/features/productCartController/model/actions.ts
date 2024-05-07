import { createAsyncThunk } from "@reduxjs/toolkit"

import { getActiveProducts } from "@/entities/order/model/actions"
import ProductOrderService from "@/entities/order/api/ProductOrderService"
import { AddProductOrderDto, DeleteProductOrderDto } from "@/entities/order"


export const addProductOrder = createAsyncThunk<any, AddProductOrderDto>(
    "order/addProductOrder", 
    async (dto, thunkAPI) => {
        try {
            const response: any = await ProductOrderService.addProductOrder(dto)

            thunkAPI.dispatch(getActiveProducts(dto.userId))
            
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)

export const deleteProductOrder = createAsyncThunk<any, DeleteProductOrderDto>(
  "order/addProductOrder", 
  async (dto, thunkAPI) => {
      try {
          const response: any = await ProductOrderService.deleteFromCart(dto.productId)

          thunkAPI.dispatch(getActiveProducts(dto.userId))
          
          return response.data
      } catch (error: any) {
          return thunkAPI.rejectWithValue("Error");
      }
  }
)