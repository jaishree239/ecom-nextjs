import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './slice/cartSlice'
// import productReducer from './slice/productSlice'
import { productsApi } from "./api/productApi";

export const store = configureStore({
    reducer: {
        // cart: cartReducer,
        // product: productReducer
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch