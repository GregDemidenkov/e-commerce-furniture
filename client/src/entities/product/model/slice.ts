import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, SortParams } from "./types";
import { getProducts } from "./actions";


interface ProductState {
    products: Product[],
    sortParams: SortParams
    isLoading: boolean
};

const initialState: ProductState = {
    products: [],
    sortParams: {},
    isLoading: false,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setProducts(state, action: PayloadAction<Product[]>) {
        state.products = action.payload;
      },
      setSortParams(state, action: PayloadAction<SortParams>) {
        state.sortParams = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.isLoading = false;
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
        })
    },
});


export const { setProducts, setSortParams } = productSlice.actions;

export default productSlice.reducer;
