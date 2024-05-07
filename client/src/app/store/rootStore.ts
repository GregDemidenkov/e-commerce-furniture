import { configureStore } from "@reduxjs/toolkit";

import productReducer from '@/entities/product/model/slice'
import orderReducer from '@/entities/order/model/slice'
import authReducer from '@/entities/auth/model/slice'


export const store = configureStore({
    reducer: {
        product: productReducer,
        auth: authReducer,
        order: orderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;