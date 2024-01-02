import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ReduxCartInitial {
    id: number;
    price: number;
    title: string;
    image: string;
}

const initialState: ReduxCartInitial[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action: PayloadAction<ReduxCartInitial>) {
            state.push(action.payload)
        },
        remove(state, action: PayloadAction<number>) {
            return state.filter(item => item.id !== action.payload)
        },
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;