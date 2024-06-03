import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FullUserOrder, ProductOrder, UserOrders } from "./types"
import { getActiveProducts } from "./actions"
import { getUserOrder } from "@/views/cartPage/model/actions"
import { getUserOrders } from "@/views/orderHistory/model/actions"


interface OrderState {
    userOrderId: string,
    userOrder: FullUserOrder | null,
    productOrders: ProductOrder[],
    activeProducts: string[],
    check: number,
    activeUserOrder: FullUserOrder[],
    closedUserOrder: FullUserOrder[],
    isLoading: boolean
}

const initialState: OrderState = {
    userOrderId: "",
    userOrder: null,
    productOrders: [],
    activeProducts: [],
    check: 0,
    activeUserOrder: [],
    closedUserOrder: [],
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

      builder.addCase(getUserOrders.pending, (state) => {
        state.isLoading = true
      })
      builder.addCase(getUserOrders.fulfilled, (state, action: PayloadAction<UserOrders>) => {
        state.isLoading = false
        state.activeUserOrder = action.payload.active;
        state.closedUserOrder = action.payload.closed;
      })
      builder.addCase(getUserOrders.rejected, (state) => {
        state.isLoading = false
      })
    },
})

export const { clearState, clearActiveProducts } = OrderSlice.actions

export default OrderSlice.reducer