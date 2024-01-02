import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/cartSlice'
import productReducer from './slice/productSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch