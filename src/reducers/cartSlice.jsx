import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseCount: (state) => {
            state.count = state.count + 1
        },
        decreaseCount: (state) => {
            if (state.count > 0) {
                state.count = state.count - 1
            }
        },
    },
})

export const { increaseCount, decreaseCount } = cartSlice.actions

export default cartSlice.reducer