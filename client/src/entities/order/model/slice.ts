import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FullUserOrder, ProductOrder } from "./types"
import { getActiveProducts } from "./actions"
import { getUserOrder } from "@/pages/cartPage/model/actions"


interface OrderState {
    userOrderId: string,
    userOrder: FullUserOrder | null,
    productOrders: ProductOrder[],
    activeProducts: string[],
    check: number,
    isLoading: boolean
}

const initialState: OrderState = {
    userOrderId: "",
    userOrder: null,
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
            state.userOrder = null
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

      builder.addCase(getUserOrder.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(getUserOrder.fulfilled, (state, action: PayloadAction<FullUserOrder | null>) => {
          state.isLoading = false
          state.userOrder = action.payload;
          state.productOrders = action.payload ? action.payload.products : [];
      })
      builder.addCase(getUserOrder.rejected, (state) => {
          state.isLoading = false
      })
    },
})

export const { clearState, clearActiveProducts } = OrderSlice.actions

export default OrderSlice.reducer