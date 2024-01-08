import { configureStore } from "@reduxjs/toolkit";
// import productReducer from './slice/productSlice'
import cartReducer from './slice/cartSlice'
import { authApi } from "./api/authApi";
import { productsApi } from "./api/productApi";

export const store = configureStore({
    reducer: {
        // product: productReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        // [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch