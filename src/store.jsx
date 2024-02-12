import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cartSlice'
import navReducer from './reducers/navSlice'


export const store = configureStore({
    reducer: {
        cartTracker: cartReducer,
        navigation: navReducer,
    }
})