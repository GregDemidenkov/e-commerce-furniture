import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { removeCookie, setCookie } from "@/shared/utils/cookie";
import { AuthResponse, LoginResponse, Message, User } from "./types";
import { auth, login, registration } from "./actions";


interface AuthState {
    user: User,
    isAuth: boolean,
    isLoading: boolean
    message: Message
};

const initialState: AuthState = {
    user: {} as User,
    isAuth: false,
    isLoading: false,
    message: {
        type: null,
        text: ""
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            removeCookie('accessToken');
            state.isAuth = false;
        },
        clearMessage(state) {
            state.message = {type: null, text: ''};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(registration.fulfilled, (state) => {
            state.isLoading = false;
            state.message.type = 'success';
            state.message.text = 'Регистрация прошла успешно';
        })
        builder.addCase(registration.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.message.type = 'error';
            state.message.text = action.payload;
        })
        
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
            state.isLoading = false;
            state.user = action.payload.user;
            setCookie('accessToken', action.payload.accessToken);
            setCookie('refreshToken', action.payload.refreshToken);
            state.isAuth = true;
            state.message.type = 'success';
            state.message.text = 'С возвращением!';
        })
        builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.message.type = 'error';
            state.message.text = action.payload;
        })

        builder.addCase(auth.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(auth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false;
            state.user = action.payload.user;
            setCookie('accessToken', action.payload.accessToken);
            state.isAuth = true;
        })
        builder.addCase(auth.rejected, (state) => {
            state.isLoading = false;
        })
    },
});


export const { logout, clearMessage } = authSlice.actions;

export default authSlice.reducer;
