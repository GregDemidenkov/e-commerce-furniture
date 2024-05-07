import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../api/ProductService";
import { Product, SortParams } from "./types";
import { productsSerialize } from "./serializer";

export const getProducts = createAsyncThunk<Product[], SortParams>(
  "product/getProducts", 
  async (dto: SortParams, thunkAPI) => {
      try {
          const response = await ProductService.getProducts(dto);
          
          return productsSerialize(response.data);
      } catch (error: any) {
          return thunkAPI.rejectWithValue(error.response.data.message);
      }
  }
)