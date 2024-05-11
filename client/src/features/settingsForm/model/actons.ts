import { User } from "@/entities/auth";
import UserService from "@/entities/auth/api/UserService";
import { setUser } from "@/entities/auth/model/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk<User, any>(
  "auth/updateUser", 
  async (dto: User, thunkAPI) => {
      try {
          const response = await UserService.updateUser(dto);

          thunkAPI.dispatch(setUser(response.data));

          return response.data;
      } catch (error: any) {
          return thunkAPI.rejectWithValue(error.response.data.message);
      }
  }
)