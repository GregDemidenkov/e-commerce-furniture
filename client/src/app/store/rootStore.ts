import { configureStore } from "@reduxjs/toolkit";

import productReducer from '@/entities/product/model/slice'
// import cartReducer from '@entities/cart/model/slice'
import authReducer from '@/entities/auth/model/slice'


export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer,
        // cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;