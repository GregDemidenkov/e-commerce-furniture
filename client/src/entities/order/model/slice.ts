import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ProductOrder } from "./types"
import { getActiveProducts } from "./actions"


interface OrderState {
    userOrderId: string,
    productOrders: ProductOrder[],
    activeProducts: string[],
    check: number,
    isLoading: boolean
}

const initialState: OrderState = {
    userOrderId: "",
    productOrders: [],
    activeProducts: [],
    check: 0,
    isLoading: false
}

const OrderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        clearState(state) {
            state.productOrders = []
            state.userOrderId = ""
        },
        clearActiveProducts(state) {
          state.activeProducts = []
        }
    },
    extraReducers: (builder) => {
      builder.addCase(getActiveProducts.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(getActiveProducts.fulfilled, (state, action: PayloadAction<string[]>) => {
          state.isLoading = false
          state.activeProducts = action.payload
      })
      builder.addCase(getActiveProducts.rejected, (state) => {
          state.isLoading = false
      })
    },
})

export const { clearState, clearActiveProducts } = OrderSlice.actions

export default OrderSlice.reducer