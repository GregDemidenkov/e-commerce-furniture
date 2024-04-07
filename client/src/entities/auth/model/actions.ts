import { createAsyncThunk } from "@reduxjs/toolkit"

import TokenService from "@/shared/api/services/TokenService"
import AuthService from "../api/AuthService"
import {
    AuthResponse,
    LoginDto,
    LoginResponse,
    RegistrationDto
} from "./types"


export const login = createAsyncThunk<LoginResponse, LoginDto>(
    "auth/login", 
    async (dto: LoginDto, thunkAPI) => {
        try {
            const response = await AuthService.login(dto);

            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

export const registration = createAsyncThunk<RegistrationDto, any>(
    "auth/registration", 
    async (dto: RegistrationDto, thunkAPI) => {
        const data = {
            first_name: dto.firstName,
            last_name: dto.lastName,
            birthday: dto.birthday,
            email: dto.email,
            password: dto.password
        };

        try {
            const response = await AuthService.registration(data);

            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

export const auth = createAsyncThunk<AuthResponse>(
    "auth/auth", 
    async (_, thunkAPI) => {
        try {
            const response = await TokenService.auth();

            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)