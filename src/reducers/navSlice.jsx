import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selection: "home"
}

export const navSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        toggleNav: (state, action) => {
            state.selection = action.payload
        }
    }
})

export const { toggleNav } = navSlice.actions

export default navSlice.reducer