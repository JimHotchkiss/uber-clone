import { configureStore } from "@reduxjs/toolkit";
// Create reducer(s)
import navReducer from './slices/navSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer
    }
})