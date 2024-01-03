// import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// interface ReduxProductInitial {

//     data: [],
//     loading: boolean,
//     error: string | null
// }

// const initialState: ReduxProductInitial = {
//     data: [],
//     loading: false,
//     error: ''
// }

// const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getProduct.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(getProduct.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.data = action.payload;
//             })
//             .addCase(getProduct.rejected, (state, action: PayloadAction<any>) => {
//                 state.loading = false;
//                 state.error = action.payload;
//                 state.data = []
//             })
//     }
// })

// export const getProduct = createAsyncThunk('product/productAsync', async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const json = await res.json();
//     return json;
// }
// )

// export const { } = productSlice.actions;
// export default productSlice.reducer;