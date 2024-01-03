// redux persist after refresh data should not go
// same item added in the cart bug fix
// useAppDispatch and useAppSelector ---> use both
// keep all css files in styles folder
// do class kaise lagate hai sign up and login form mai

// hooks.ts
{/* import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector */}


// const handleAdd = (product) => {
    //     dispatch(add(product))
    // }

    // onClick={() => handleAdd(product)}

    // const handleRemove = (productId) => {
    //     dispatch(remove(productId));
    // };

//     className={styles.card__image}
// className={styles.card__title}
// className={styles.card__price}

// local storage mai data store karo i.e data persist karo since refresh par data is gone

// data: [] | null,

// export const getProduct = createAsyncThunk('product/productAsync', async () => {
//     // return fetch('https://fakestoreapi.com/products')
//     //     .then(res => res.json())
//     const res = await fetch('https://fakestoreapi.com/products')
//     const json = await res.json();
//     return json;
// }

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     // initialState: [],
//     reducers: {
//         // add(state, action) {
//         add(state, action: PayloadAction<ReduxCartInitial>) {
//             // console.log('add action', action)
//             state.push(action.payload)
//         },
//         // remove(state, action) {
//         remove(state, action: PayloadAction<number>) {
//             // console.log('remove action', action)
//             return state.filter(item => item.id !== action.payload)
//         },
//     }
// })


// Protected Routes In Under 5 Minutes: Next.js ---> you tube channel